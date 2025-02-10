import styles from './styles.module.css';
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div className={styles.customPostName}>My Post: {slug}</div>
}