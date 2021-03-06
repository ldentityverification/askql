import { AskCodeOrValue } from '../../askcode';
import * as askjsx from './jsx';
askjsx;

export function While({
  condition,
  args,
  children,
}: {
  condition: AskCodeOrValue;
  args: AskCodeOrValue;
  children: AskCodeOrValue[];
}) {
  return (
    <code while>
      {condition}
      {args}
      <code block>{children}</code>
    </code>
  );
}
