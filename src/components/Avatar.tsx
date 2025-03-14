import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface AvatarProps {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <AvatarUI className="w-28 h-28">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>A</AvatarFallback>
    </AvatarUI>
  )
}

export default Avatar
