export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links:link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
export interface link {
    url: string | null;
    label: string;
    active: boolean;
  }

export const emptyMeta:Meta = {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
  }