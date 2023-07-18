import axios from 'axios';
import { GetServerSideProps } from 'next';

import { withLayout } from '../../layout/layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { PageModel } from '../../interfaces/page.interface';
import { firstLevelMenu } from '../../helpers/constants';
import { CoursePageComponent } from '../../page-components';
import Seo from '../../layout/seo/seo';

const Index = ({ products, firstCategory, page }: PageProps): JSX.Element => {
  return (
    <Seo
      metaTitle={page.title}
      metaDescription={page.description}
      metaKeyword={page.tags.toString()}
    >
      <CoursePageComponent
        products={products}
        firstCategory={firstCategory}
        page={page}
      />
    </Seo>
  );
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  query,
}) => {
  const { type, slug } = query;
  const firstCategory = 0;

  if (!slug) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((c) => c.route === type);

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: firstCategoryItem.id }
  );

  const { data: page } = await axios.get<PageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
    {
      category: slug,
    }
  );

  return {
    props: { menu, page, products, firstCategory: firstCategoryItem.id },
  };
};

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel;
  products: ProductModel[];
  firstCategory: number;
}
