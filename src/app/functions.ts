export function FormControls(style: string): string {
  let newStyle: string = style.split(' ')[0] + style.split(' ')[1][0].toUpperCase() + style.split(' ')[1].slice(1)
  return newStyle
}
