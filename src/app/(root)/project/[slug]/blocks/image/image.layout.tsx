interface ImageBlockLayoutProps {
  title: string | null
  description: string | null
  children: React.ReactNode
}

export const ImageBlockLayout: React.FC<ImageBlockLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {children}
      {description && <p>{description}</p>}
    </>
  )
}
