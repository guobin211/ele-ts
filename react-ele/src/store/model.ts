
export interface SellerVM {
  name:          string;
  description:   string;
  deliveryTime:  number;
  score:         number;
  serviceScore:  number;
  foodScore:     number;
  rankRate:      number;
  minPrice:      number;
  deliveryPrice: number;
  ratingCount:   number;
  sellCount:     number;
  bulletin:      string;
  supports:      Support[];
  avatar:        string;
  pics:          string[];
  infos:         string[];
}

export interface Support {
  type:        number;
  description: string;
}

export interface GoodsVM {
  name:  string;
  type:  number;
  foods: FoodVM[];
}

export interface FoodVM {
  name:        string;
  price:       number;
  oldPrice:    number | string;
  description: string;
  sellCount:   number;
  rating:      number;
  info?:       string;
  ratings:     FoodRating[];
  icon:        string;
  image:       string;
}

export interface FoodRating {
  username: string;
  rateTime: number;
  rateType: number;
  text:     string;
  avatar:   string;
}

export interface ShopRatingVM {
  username:     string;
  rateTime:     number;
  deliveryTime: number | string;
  score:        number;
  rateType:     number;
  text:         string;
  avatar:       string;
  recommend:    string[];
}
