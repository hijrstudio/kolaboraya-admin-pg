import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBannerInfo extends Struct.ComponentSchema {
  collectionName: 'components_banner_banner_infos';
  info: {
    displayName: 'BannerInfo';
    icon: 'book';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.Required;
    imageBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeBackgroundHero extends Struct.ComponentSchema {
  collectionName: 'components_home_background_heroes';
  info: {
    displayName: 'Background Hero';
    icon: 'picture';
  };
  attributes: {
    photo_1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    photo_2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    photo_3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    photo_4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface HomeSectionKolaborasi extends Struct.ComponentSchema {
  collectionName: 'components_home_section_kolaborasis';
  info: {
    displayName: 'Section Kolaborasi';
    icon: 'command';
  };
  attributes: {
    photo_1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    photo_2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    photo_3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    summaryCircle: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeSectionKolaborator extends Struct.ComponentSchema {
  collectionName: 'components_home_section_kolaborators';
  info: {
    displayName: 'SectionKolaborator';
    icon: 'cloud';
  };
  attributes: {
    logoKolaborator: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeSectionOnText extends Struct.ComponentSchema {
  collectionName: 'components_home_section_on_texts';
  info: {
    displayName: 'Section On Text';
    icon: 'fileXls';
  };
  attributes: {
    summaryAgenda: Schema.Attribute.String & Schema.Attribute.Required;
    taglineAgenda: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSectionSenarai extends Struct.ComponentSchema {
  collectionName: 'components_home_section_senarais';
  info: {
    displayName: 'Section Senarai';
    icon: 'apps';
  };
  attributes: {
    imageCard_1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    imageCard_2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    summarySenarai: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TentangSectionTentang extends Struct.ComponentSchema {
  collectionName: 'components_tentang_section_tentangs';
  info: {
    displayName: 'Section Tentang';
    icon: 'bell';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    summaryColor: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleColor: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.banner-info': BannerBannerInfo;
      'home.background-hero': HomeBackgroundHero;
      'home.section-kolaborasi': HomeSectionKolaborasi;
      'home.section-kolaborator': HomeSectionKolaborator;
      'home.section-on-text': HomeSectionOnText;
      'home.section-senarai': HomeSectionSenarai;
      'tentang.section-tentang': TentangSectionTentang;
    }
  }
}
