export enum ActionTypes {
    SET_RESTAURANTS = "restaurants/SET_RESTAURANTS",
    SET_SELECTED_RESTAURANT= "restaurants/SET_SELECTED_RESTAURANT"
}

export interface IEstablishmentsSearched {
    business_status: string;
    geometry: any;
    html_attributions: any;
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    opening_hours: any;
    photos: any;
    place_id: string;
    formatted_phone_number?: string; 
    plus_code: { compound_code: string;  global_code: string;}
    rating: number;
    reference: string;
    scope: string;
    types: string[];
    user_ratings_total: number;
    vicinity: string;
    formatted_address?: string;
}


export interface IRestaurantState {
    restaurants: IEstablishmentsSearched[];
    restaurantSelected: IEstablishmentsSearched | null;
}
