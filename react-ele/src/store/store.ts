import { GoodsVM, SellerVM, ShopRatingVM } from "./model";

export function getGoodsData(): Promise<GoodsVM[]> {
  return fetch('/data.json').then(res => res.json()).then(res => res.goods);
}

export function getSellerData(): Promise<SellerVM> {
  return fetch('/data.json').then(res => res.json()).then(res => res.seller);
}

export function getRatingData(): Promise<ShopRatingVM> {
  return fetch('/data.json').then(res => res.json()).then(res => res.ratings);
}

