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

// GET: 상품 목록 조회
export async function GET() {
  try {
    const products = readProducts();
    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, error: '상품 목록 조회 실패' }, { status: 500 });
  }
}

// POST: 상품 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const products = readProducts();
    
    // 새 ID 생성
    const newId = body.id || `product-${Date.now()}`;
    
    const newProduct = {
      id: newId,
      name: body.name || '',
      description: body.description || '',
      price: body.price || 0,
      originalPrice: body.originalPrice || null,
      features: body.features || [],
      pages: body.pages || 0,
      category: body.category || 'basic',
      icon: body.icon || '📊',
      badge: body.badge || null,
      isActive: body.isActive !== false,
      popular: body.popular || false,
      sortOrder: body.sortOrder || products.length + 1
    };
    
    products.push(newProduct);
    saveProducts(products);
    
    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ success: false, error: '상품 추가 실패' }, { status: 500 });
  }
}
