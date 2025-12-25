import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'products.json');

// 데이터 읽기
function readProducts() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data).products;
  } catch (error) {
    return [];
  }
}

// 데이터 저장
function saveProducts(products: any[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify({ products }, null, 2), 'utf-8');
}

// GET: 단일 상품 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const products = readProducts();
    const product = products.find((p: any) => p.id === params.id);
    
    if (!product) {
      return NextResponse.json({ success: false, error: '상품을 찾을 수 없습니다' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json({ success: false, error: '상품 조회 실패' }, { status: 500 });
  }
}

// PUT: 상품 수정
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const products = readProducts();
    const index = products.findIndex((p: any) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ success: false, error: '상품을 찾을 수 없습니다' }, { status: 404 });
    }
    
    // 기존 데이터에 업데이트
    products[index] = {
      ...products[index],
      ...body,
      id: params.id // ID는 변경 불가
    };
    
    saveProducts(products);
    
    return NextResponse.json({ success: true, product: products[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: '상품 수정 실패' }, { status: 500 });
  }
}

// DELETE: 상품 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const products = readProducts();
    const index = products.findIndex((p: any) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json({ success: false, error: '상품을 찾을 수 없습니다' }, { status: 404 });
    }
    
    products.splice(index, 1);
    saveProducts(products);
    
    return NextResponse.json({ success: true, message: '상품이 삭제되었습니다' });
  } catch (error) {
    return NextResponse.json({ success: false, error: '상품 삭제 실패' }, { status: 500 });
  }
}
