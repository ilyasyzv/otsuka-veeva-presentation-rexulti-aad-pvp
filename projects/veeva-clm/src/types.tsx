export type FootNoteType = {
  supLeftBig?: string;
  supLeft?: string;
  innerText: string | React.ReactNode;
  supRight?: string;
};

export interface FootNoteProps {
  custom?: string;
  footnotes?: FootNoteType[];
}

export interface SupLeftProps {
  text: string;
  big?: boolean;
}

export type ReferencesType = {
  text: string | React.ReactNode;
};

export interface ReferencesProps {
  custom?: string;
  references: ReferencesType[];
}

export type SafetyInfoType = {
  text: string | React.ReactNode;
};

export interface SafetyInfoProps {
  custom?: string;
  safetyInfo: SafetyInfoType[];
}

export interface LogoProps {
  images?: React.ReactNode[];
}

export interface FooterProps {
  custom?: string;
  footnotes?: {
    custom?: string;
    data: FootNoteType[];
  };
  references?: {
    custom?: string;
    data: ReferencesType[];
  };
  safetyInfo?: {
    custom?: string;
    data: SafetyInfoType[];
  };
  images?: React.ReactNode[];
  footerArrow?: boolean;
}
