/* Just alias Js.Result.t for now. Probably won't make a native implementation until BS is on 4.03 anyway */
type result('a, 'e) = Js.Result.t('a, 'e) =
  | Ok('a)
  | Error('e);
