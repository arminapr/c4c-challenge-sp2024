export interface PartnerDetails {
    thumbnailUrl: string;
    websiteUrl: string;
    name: string;
    description: string;
    isActive: boolean;
}

export type PartnerData = Record<string, PartnerDetails>;
