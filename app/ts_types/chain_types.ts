export interface Chain  {
  id: string;
  createdon: string;
  createdname: string;
  source: string;
  destination: string;
  leads: number;       // <-- number
  createdby: string;
    status?: boolean;   // <-- boolean
  recentleaddata: string;
};



export interface ChainState {
  isLoading: boolean;
  chainData: Chain[];
  chainViewData: Chain | null;
  chainEditData: Chain | null;
  error: string | null;
}
export type homeType = {
  isLoading: boolean;
  chainData: Chain[];
  error: string | null;
  chainViewData: Chain | null;
  chainEditData: Chain | null;
};

export interface ChainItem {
  id: string | number;       // the unique identifier
  name?: string;             // example property, you can add more
  description?: string;      // example property
  [key: string]: any;        // allow other dynamic fields if needed
}

export interface ChainFormValues {
   id: string | number;
   createdon: string;
   createdname: string;
   source: string;
   destination: string;
   leads: string;
   createdby: string;
   status: boolean; // <-- required
   recentleaddata: string;
}
