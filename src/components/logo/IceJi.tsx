import clsx from 'clsx'

const IceJiLogo = (props: {
  stroke?: { strokeClassName?: string; solidClassName?: string }
  style?: JSON
  className?: string
  events?: Record<string, () => void>
}) => {
  if (props.stroke) {
    return (
      <>
        <svg
          viewBox='0 0 1024 1024'
          style={{ fill: 'none' }}
          className={clsx('h-full w-full', props.className)}
          {...props.events}
        >
          <path
            className={clsx(props.stroke.strokeClassName)}
            d='M512.42,189.92,795.28,353.23V679.86L512.42,843.17,229.55,679.86V353.23L512.42,189.92m0-151.83L98.06,277.31V755.77L512.42,995,926.77,755.77V277.31L512.42,38.09Z'
          />
          <path
            className={clsx(props.stroke.strokeClassName)}
            d='M511.89,1014,80.9,765.17V267.51l431-248.83,431,248.83V765.17ZM113.81,746.17,511.89,976,910,746.17V286.51L511.89,56.68,113.81,286.51Z'
          />
          <polygon
            className={clsx(props.stroke.strokeClassName)}
            points='98.06 277.31 229.55 353.23 229.55 679.86 98.06 755.77 98.06 277.31'
          />
          <polygon
            className={clsx(props.stroke.strokeClassName)}
            points='795.28 353.23 926.77 277.31 926.77 755.77 512.42 995 512.42 843.17 796.53 681.14 795.28 353.23'
          />
          <rect
            className={clsx(props.stroke.solidClassName)}
            opacity={0.1}
            x='507.77'
            y='516.15'
            width='8.23'
            height='470.99'
          />
          <rect
            className={clsx(props.stroke.solidClassName)}
            opacity={0.1}
            x='304'
            y='163.18'
            width='8.23'
            height='471.02'
            transform='translate(-191.22 466.18) rotate(-60)'
          />
          <rect
            className={clsx(props.stroke.solidClassName)}
            opacity={0.1}
            x='480.7'
            y='394.43'
            width='470.43'
            height='8.23'
            transform='translate(-103.36 411.36) rotate(-30)'
          />
        </svg>
      </>
    )
  } else {
    return (
      <svg
        viewBox='0 0 1024 1024'
        className={clsx('h-full w-full', props.className)}
        {...props.events}
      >
        <path
          opacity={0.1}
          d='M512.42,189.92,795.28,353.23V679.86L512.42,843.17,229.55,679.86V353.23L512.42,189.92m0-151.83L98.06,277.31V755.77L512.42,995,926.77,755.77V277.31L512.42,38.09Z'
        />
        <path d='M511.89,1014,80.9,765.17V267.51l431-248.83,431,248.83V765.17ZM113.81,746.17,511.89,976,910,746.17V286.51L511.89,56.68,113.81,286.51Z' />
        <polygon points='98.06 277.31 229.55 353.23 229.55 679.86 98.06 755.77 98.06 277.31' />
        <polygon points='795.28 353.23 926.77 277.31 926.77 755.77 512.42 995 512.42 843.17 796.53 681.14 795.28 353.23' />
        <rect x='507.77' y='516.15' width='8.23' height='470.99' />
        <rect
          x='304'
          y='163.18'
          width='8.23'
          height='471.02'
          transform='translate(-191.22 466.18) rotate(-60)'
        />
        <rect
          x='480.7'
          y='394.43'
          width='470.43'
          height='8.23'
          transform='translate(-103.36 411.36) rotate(-30)'
        />
      </svg>
    )
  }
}

export { IceJiLogo }
