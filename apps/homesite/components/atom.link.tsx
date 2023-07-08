import Link from 'next/link'

type Props = {
  href: string
  label: string
  prefetch?: boolean
}

export default function AtomLink(props: Props) {
  return (
    <Link prefetch={props.prefetch} href={props.href}>
      {props.label}
    </Link>
  )
}
