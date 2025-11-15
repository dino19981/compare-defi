import React from 'react';

import { SeoDto } from 'shared/api/generated/Api';

interface Props {
  seo: SeoDto;
}

export const SeoBlocks = ({ seo }: Props) => {
  return (
    <div>
      <h1>{seo.title}</h1>
      <p>{seo.description}</p>
    </div>
  );
};
