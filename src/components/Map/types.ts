export interface IMapContainerProps {
  google: any;
  query: string;
}

export interface ISearchResults {
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
  plus_code: { compound_code: string;  global_code: string;}
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}[]