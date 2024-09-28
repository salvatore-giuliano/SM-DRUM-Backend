import type { Struct, Schema } from '@strapi/strapi';

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Rullanti artigianali'>;
    suffix: Schema.Attribute.String & Schema.Attribute.DefaultTo<'SM-DRUM'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Realizziamo Rullanti Artigianali in un unico strato'>;
    index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface PageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_text_blocks';
  info: {
    displayName: 'TextBlock';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
  };
}

export interface PageImagesBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_images_blocks';
  info: {
    displayName: 'imagesBlock';
    icon: 'picture';
  };
  attributes: {
    horizontalImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    verticalImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ProductSheet extends Struct.ComponentSchema {
  collectionName: 'components_product_sheets';
  info: {
    displayName: 'Sheet';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
    subLabel: Schema.Attribute.String;
    subValue: Schema.Attribute.String;
  };
}

export interface ProductDescription extends Struct.ComponentSchema {
  collectionName: 'components_product_descriptions';
  info: {
    displayName: 'Description';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
  };
}

export interface MenuSocial extends Struct.ComponentSchema {
  collectionName: 'components_menu_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface InfoContacts extends Struct.ComponentSchema {
  collectionName: 'components_info_contacts';
  info: {
    displayName: 'contacts';
    icon: 'phone';
    description: '';
  };
  attributes: {
    phone: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    address: Schema.Attribute.String;
    cup: Schema.Attribute.String;
    city: Schema.Attribute.String;
    province: Schema.Attribute.String;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
    titleSuffix: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
    link: Schema.Attribute.String;
    bannerText: Schema.Attribute.String;
  };
}

export interface HomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_sections';
  info: {
    displayName: 'SectionBlock';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    richTitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
    abstract: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
    link: Schema.Attribute.String;
    bannerText: Schema.Attribute.String;
    imagesLeft: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imagesRight: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeSectionProducts extends Struct.ComponentSchema {
  collectionName: 'components_home_section_products';
  info: {
    displayName: 'SectionProducts';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    richTitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'myCustomPreset';
        }
      >;
    bannerText: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'SM-DRUM'>;
    subtitle: Schema.Attribute.String;
    heroImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroImagesMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'password', 'number', 'data', 'tel', 'textarea']
    >;
    name: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    errorRequired: Schema.Attribute.String;
  };
}

export interface FormForm extends Struct.ComponentSchema {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Form';
    icon: 'layer';
    description: '';
  };
  attributes: {
    fields: Schema.Attribute.Component<'form.input', true>;
    successSendMessage: Schema.Attribute.String;
    errorSendMessage: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo': SeoSeo;
      'page.text-block': PageTextBlock;
      'page.images-block': PageImagesBlock;
      'product.sheet': ProductSheet;
      'product.description': ProductDescription;
      'menu.social': MenuSocial;
      'menu.menu': MenuMenu;
      'info.contacts': InfoContacts;
      'home.section': HomeSection;
      'home.section-products': HomeSectionProducts;
      'home.hero': HomeHero;
      'form.input': FormInput;
      'form.form': FormForm;
    }
  }
}
