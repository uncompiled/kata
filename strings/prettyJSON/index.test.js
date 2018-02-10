const prettyJSON = require('../prettyJSON')

test('nested objects are prettified correctly', () => {
  let input = `{A:"B",C:{D:"E",F:{G:"H",I:"J"}}}`

  let expected = [
    '{',
    '\tA:"B",',
    '\tC:',
    '\t{',
    '\t\tD:"E",',
    '\t\tF:',
    '\t\t{',
    '\t\t\tG:"H",',
    '\t\t\tI:"J"',
    '\t\t}',
    '\t}',
    '}'
  ]

  expect(prettyJSON(input)).toEqual(expected)
})

test('arrays are prettified correctly', () => {
  let input = `["foo",{"bar":["baz",null,1.0,2]}]`

  let expected = [
    '[',
    '\t"foo",',
    '\t{',
    '\t\t"bar":',
    '\t\t[',
    '\t\t\t"baz",',
    '\t\t\tnull,',
    '\t\t\t1.0,',
    '\t\t\t2',
    '\t\t]',
    '\t}',
    ']'
  ]

  expect(prettyJSON(input)).toEqual(expected)
})

test('whitespace between keys and values are ignored', () => {
  let input = `[
    "foo",
    {
      "bar": [ "baz", null, 1.0, 2 ]
    }
  ]`

  let expected = [
    '[',
    '\t"foo",',
    '\t{',
    '\t\t"bar":',
    '\t\t[',
    '\t\t\t"baz",',
    '\t\t\tnull,',
    '\t\t\t1.0,',
    '\t\t\t2',
    '\t\t]',
    '\t}',
    ']'
  ]

  expect(prettyJSON(input)).toEqual(expected)
})

test('complex JSON object is prettified correctly', () => {
  let input = `{"attributes":[{"nm":"ACCOUNT","lv":[{"v":{"Id":null,"State":null},"vt":"java.util.Map","cn":1}],"vt":"java.util.Map","status":"SUCCESS","lmd":13585},{"nm":"PROFILE","lv":[{"v":{"Party":null,"Ads":null},"vt":"java.util.Map","cn":2}],"vt":"java.util.Map","status":"SUCCESS","lmd":41962}]}`
  let expected = [
    '{',
    '\t"attributes":',
    '\t[',
    '\t\t{',
    '\t\t\t"nm":"ACCOUNT",',
    '\t\t\t"lv":',
    '\t\t\t[',
    '\t\t\t\t{',
    '\t\t\t\t\t"v":',
    '\t\t\t\t\t{',
    '\t\t\t\t\t\t"Id":null,',
    '\t\t\t\t\t\t"State":null',
    '\t\t\t\t\t},',
    '\t\t\t\t\t"vt":"java.util.Map",',
    '\t\t\t\t\t"cn":1',
    '\t\t\t\t}',
    '\t\t\t],',
    '\t\t\t"vt":"java.util.Map",',
    '\t\t\t"status":"SUCCESS",',
    '\t\t\t"lmd":13585',
    '\t\t},',
    '\t\t{',
    '\t\t\t"nm":"PROFILE",',
    '\t\t\t"lv":',
    '\t\t\t[',
    '\t\t\t\t{',
    '\t\t\t\t\t"v":',
    '\t\t\t\t\t{',
    '\t\t\t\t\t\t"Party":null,',
    '\t\t\t\t\t\t"Ads":null',
    '\t\t\t\t\t},',
    '\t\t\t\t\t"vt":"java.util.Map",',
    '\t\t\t\t\t"cn":2',
    '\t\t\t\t}',
    '\t\t\t],',
    '\t\t\t"vt":"java.util.Map",',
    '\t\t\t"status":"SUCCESS",',
    '\t\t\t"lmd":41962',
    '\t\t}',
    '\t]',
    '}'
  ]

  expect(prettyJSON(input)).toEqual(expected)
})
