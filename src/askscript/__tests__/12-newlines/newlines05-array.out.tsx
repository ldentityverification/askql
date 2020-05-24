import * as askjsx from '../../../askjsx';
askjsx;

export const expectedOutput = (
  <ask>
    <set name={'arr1'} type={'array(int)'} value={[1, 2, 3]} />
    <set name={'arr2'} type={'any'} value={[1, 2, 3]} />
    <set name={'arr3'} type={'any'} value={[1.3, 1.4, 1.5]} />
    <set name={'arr4'} type={'any'} value={['asdf', 'qwer', 'tyui']} />
  </ask>
);