import { supabase } from './supabase';

export interface Review {
  id: string;
  user_id: string;
  product_id: string;
  order_id: string;
  rating: number;
  title: string;
  content: string;
  images: string[];
  is_verified_purchase: boolean;
  is_best: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
  user?: {
    name: string;
    email: string;
  };
  product?: {
    name: string;
  };
}

export interface ReviewStats {
  total_reviews: number;
  average_rating: number;
  rating_5_count: number;
  rating_4_count: number;
  rating_3_count: number;
  rating_2_count: number;
  rating_1_count: number;
}

// 리뷰 이미지 업로드
export async function uploadReviewImage(
  userId: string,
  file: File
): Promise<{
  success: boolean;
  url?: string;
  error?: string;
}> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('review-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('review-images')
      .getPublicUrl(fileName);

    return {
      success: true,
      url: data.publicUrl,
    };
  } catch (error: any) {
    console.error('Upload review image error:', error);
    return {
      success: false,
      error: '이미지 업로드 중 오류가 발생했습니다.',
    };
  }
}

// 리뷰 작성
export async function createReview(review: {
  user_id: string;
  product_id: string;
  order_id: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
}): Promise<{
  success: boolean;
  review?: Review;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        {
          ...review,
          images: review.images || [],
          is_verified_purchase: true,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      review: data,
    };
  } catch (error: any) {
    console.error('Create review error:', error);
    return {
      success: false,
      error: '리뷰 작성 중 오류가 발생했습니다.',
    };
  }
}

// 리뷰 수정
export async function updateReview(
  reviewId: string,
  updates: {
    rating?: number;
    title?: string;
    content?: string;
    images?: string[];
  }
): Promise<{
  success: boolean;
  review?: Review;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .update(updates)
      .eq('id', reviewId)
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      review: data,
    };
  } catch (error: any) {
    console.error('Update review error:', error);
    return {
      success: false,
      error: '리뷰 수정 중 오류가 발생했습니다.',
    };
  }
}

// 리뷰 삭제
export async function deleteReview(
  reviewId: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase.from('reviews').delete().eq('id', reviewId);

    if (error) throw error;

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Delete review error:', error);
    return {
      success: false,
      error: '리뷰 삭제 중 오류가 발생했습니다.',
    };
  }
}

// 상품별 리뷰 조회
export async function getProductReviews(
  productId: string,
  options?: {
    limit?: number;
    offset?: number;
    sortBy?: 'created_at' | 'rating' | 'helpful_count';
    sortOrder?: 'asc' | 'desc';
  }
): Promise<{
  success: boolean;
  reviews?: Review[];
  error?: string;
}> {
  try {
    let query = supabase
      .from('reviews')
      .select(
        `
        *,
        user:user_id (name, email),
        product:product_id (name)
      `
      )
      .eq('product_id', productId);

    // 정렬
    const sortBy = options?.sortBy || 'created_at';
    const sortOrder = options?.sortOrder || 'desc';
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // 페이지네이션
    if (options?.limit) {
      query = query.limit(options.limit);
    }
    if (options?.offset) {
      query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }

    const { data, error } = await query;

    if (error) throw error;

    return {
      success: true,
      reviews: data,
    };
  } catch (error: any) {
    console.error('Get product reviews error:', error);
    return {
      success: false,
      error: '리뷰 조회 중 오류가 발생했습니다.',
    };
  }
}

// 사용자별 리뷰 조회
export async function getUserReviews(
  userId: string
): Promise<{
  success: boolean;
  reviews?: Review[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select(
        `
        *,
        user:user_id (name, email),
        product:product_id (name)
      `
      )
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return {
      success: true,
      reviews: data,
    };
  } catch (error: any) {
    console.error('Get user reviews error:', error);
    return {
      success: false,
      error: '리뷰 조회 중 오류가 발생했습니다.',
    };
  }
}

// 상품 리뷰 통계
export async function getProductReviewStats(
  productId: string
): Promise<{
  success: boolean;
  stats?: ReviewStats;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('product_review_stats')
      .select('*')
      .eq('product_id', productId)
      .single();

    if (error) {
      // 리뷰가 없는 경우
      return {
        success: true,
        stats: {
          total_reviews: 0,
          average_rating: 0,
          rating_5_count: 0,
          rating_4_count: 0,
          rating_3_count: 0,
          rating_2_count: 0,
          rating_1_count: 0,
        },
      };
    }

    return {
      success: true,
      stats: data,
    };
  } catch (error: any) {
    console.error('Get product review stats error:', error);
    return {
      success: false,
      error: '통계 조회 중 오류가 발생했습니다.',
    };
  }
}

// 베스트 리뷰 조회
export async function getBestReviews(
  productId?: string,
  limit: number = 10
): Promise<{
  success: boolean;
  reviews?: Review[];
  error?: string;
}> {
  try {
    let query = supabase
      .from('reviews')
      .select(
        `
        *,
        user:user_id (name, email),
        product:product_id (name)
      `
      )
      .eq('is_best', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (productId) {
      query = query.eq('product_id', productId);
    }

    const { data, error } = await query;

    if (error) throw error;

    return {
      success: true,
      reviews: data,
    };
  } catch (error: any) {
    console.error('Get best reviews error:', error);
    return {
      success: false,
      error: '베스트 리뷰 조회 중 오류가 발생했습니다.',
    };
  }
}

// 도움됨 추가
export async function addHelpful(
  reviewId: string,
  userId: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // 도움됨 추가
    const { error: insertError } = await supabase
      .from('helpful_reviews')
      .insert([{ review_id: reviewId, user_id: userId }]);

    if (insertError) throw insertError;

    // 카운트 증가
    const { error: updateError } = await supabase.rpc('increment_helpful_count', {
      review_id: reviewId,
    });

    if (updateError) {
      // RPC가 없으면 수동으로 증가
      const { data: review } = await supabase
        .from('reviews')
        .select('helpful_count')
        .eq('id', reviewId)
        .single();

      if (review) {
        await supabase
          .from('reviews')
          .update({ helpful_count: review.helpful_count + 1 })
          .eq('id', reviewId);
      }
    }

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Add helpful error:', error);
    return {
      success: false,
      error: '도움됨 추가 중 오류가 발생했습니다.',
    };
  }
}

// 도움됨 제거
export async function removeHelpful(
  reviewId: string,
  userId: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // 도움됨 제거
    const { error: deleteError } = await supabase
      .from('helpful_reviews')
      .delete()
      .eq('review_id', reviewId)
      .eq('user_id', userId);

    if (deleteError) throw deleteError;

    // 카운트 감소
    const { data: review } = await supabase
      .from('reviews')
      .select('helpful_count')
      .eq('id', reviewId)
      .single();

    if (review && review.helpful_count > 0) {
      await supabase
        .from('reviews')
        .update({ helpful_count: review.helpful_count - 1 })
        .eq('id', reviewId);
    }

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Remove helpful error:', error);
    return {
      success: false,
      error: '도움됨 제거 중 오류가 발생했습니다.',
    };
  }
}

// 사용자가 도움됨을 눌렀는지 확인
export async function checkUserHelpful(
  reviewId: string,
  userId: string
): Promise<{
  success: boolean;
  isHelpful?: boolean;
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('helpful_reviews')
      .select('id')
      .eq('review_id', reviewId)
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return {
      success: true,
      isHelpful: !!data,
    };
  } catch (error: any) {
    console.error('Check user helpful error:', error);
    return {
      success: false,
      error: '도움됨 확인 중 오류가 발생했습니다.',
    };
  }
}

// 베스트 리뷰 설정 (관리자)
export async function setBestReview(
  reviewId: string,
  isBest: boolean
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const { error } = await supabase
      .from('reviews')
      .update({ is_best: isBest })
      .eq('id', reviewId);

    if (error) throw error;

    return {
      success: true,
    };
  } catch (error: any) {
    console.error('Set best review error:', error);
    return {
      success: false,
      error: '베스트 리뷰 설정 중 오류가 발생했습니다.',
    };
  }
}

// 주문에서 리뷰 작성 가능 여부 확인
export async function canWriteReview(
  userId: string,
  orderId: string,
  productId: string
): Promise<{
  success: boolean;
  canWrite?: boolean;
  error?: string;
}> {
  try {
    // 이미 작성한 리뷰가 있는지 확인
    const { data: existingReview, error: reviewError } = await supabase
      .from('reviews')
      .select('id')
      .eq('user_id', userId)
      .eq('order_id', orderId)
      .eq('product_id', productId)
      .single();

    if (reviewError && reviewError.code !== 'PGRST116') {
      throw reviewError;
    }

    return {
      success: true,
      canWrite: !existingReview,
    };
  } catch (error: any) {
    console.error('Can write review error:', error);
    return {
      success: false,
      error: '리뷰 작성 가능 여부 확인 중 오류가 발생했습니다.',
    };
  }
}

// 모든 리뷰 조회 (관리자용)
export async function getAllReviews(options?: {
  limit?: number;
  offset?: number;
  sortBy?: 'created_at' | 'rating' | 'helpful_count';
  sortOrder?: 'asc' | 'desc';
  productId?: string;
}): Promise<{
  success: boolean;
  reviews?: Review[];
  error?: string;
}> {
  try {
    let query = supabase.from('reviews').select(
      `
        *,
        user:user_id (name, email),
        product:product_id (name)
      `
    );

    if (options?.productId) {
      query = query.eq('product_id', options.productId);
    }

    // 정렬
    const sortBy = options?.sortBy || 'created_at';
    const sortOrder = options?.sortOrder || 'desc';
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // 페이지네이션
    if (options?.limit) {
      query = query.limit(options.limit);
    }
    if (options?.offset) {
      query = query.range(
        options.offset,
        options.offset + (options.limit || 10) - 1
      );
    }

    const { data, error } = await query;

    if (error) throw error;

    return {
      success: true,
      reviews: data,
    };
  } catch (error: any) {
    console.error('Get all reviews error:', error);
    return {
      success: false,
      error: '리뷰 조회 중 오류가 발생했습니다.',
    };
  }
}
