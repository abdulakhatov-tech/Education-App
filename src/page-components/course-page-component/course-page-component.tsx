import cn from 'classnames';

import { CoursePageComponentProps } from './course-page-component.props';
import styles from './course-page-component.module.css';
import { Advantages, Heading, HhData, Tag, Text } from '../../components';

const CoursePageComponent = ({
  firstCategory,
  page,
  products,
}: CoursePageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/*  TITLE */}
      <div className={styles.title}>
        <Heading tag="h1">{page?.title}</Heading>
        <div>Sort</div>
      </div>

      {/* PRODUCTS */}
      <div>PRODUCTS</div>

      {/* VACATIONS */}
      <div className={styles.hhTitle}>
        <Heading tag="h2">Vacations - {page?.category}</Heading>
        <Tag color="red" size="m">
          hh.uz
        </Tag>
      </div>

      {/* HHDATA */}
      {page?.hh && <HhData {...page.hh} />}

      {/* ADVANTAGES */}
      {page?.advantages && page?.advantages?.length && (
        <>
          <Heading tag="h2">Advantages</Heading>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {/* DESCRIPTION */}
      <Text>{page?.description}</Text>

      {/* SKILLS */}
      <Heading tag="h2">Skills</Heading>
      {page?.tags.length &&
        page.tags.map((t) => (
          <Tag key={t} color="primary">
            {t}
          </Tag>
        ))}
    </div>
  );
};

export default CoursePageComponent;
