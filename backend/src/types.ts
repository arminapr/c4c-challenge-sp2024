export interface PartnerDetails {
    thumbnailUrl: string;
    name: string;
    description: string;
    isActive: boolean;
}

export type PartnerData = Record<string, PartnerDetails>;
