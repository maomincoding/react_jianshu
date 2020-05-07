import { createGlobalStyle } from 'styled-components';

const GlobalFontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1588833061197'); /* IE9 */
  src: url('./iconfont.eot?t=1588833061197#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP0AAsAAAAACBgAAAOmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDXIMlATYCJAMQCwoABCAFhG0HPRsMB1GUzM0i2c8E29bC1pGMt66liUqKxmwp9ay34Nt4qNY+X8/07s0RKlCAEiyXP3UOKGGjEKSLijEpz0b8wbwqbZeZM3rSwm7noCLpdseZrP09UC/JLz7XWc+w0AABgMn/53J6d5X4/HaWyxzj+WGA0QQKdKxBGzAuoAS5YeyClriewIhlCzGnSRkFwEMyuwXiua5JwCOjkw3FoQl9xdgcjm/AVSvv2fsA+Bp8P/4Dvzwousrse/YwUQUxvxb9iuPqBma5hwD+dBawSVTsAJJ4XGm7xUWxHZwR9Tcu9gFNU/i16GfQr7iBASg4iqxZf3kUoRI9s3AM7CJpvTC+g1P4FYQT/I6Te0hSKtrgxCfAD0xZfEWqutbmGzQ2OTa7Sz9ZheKgAmgyLFm6bgrcMm6xdM7QCcDgZdjxkKk3GuuD+SOEMwfADho6rzGM8vKl+OqV8cUL4fnzlbakIOSk53/5srxjjLiu/vD+0cLajRvWjKrsXFu3Bg7ryL/ZekPphboI9UBAwZ6zEzZNNG5foF3qVEcdGFewZu1Y4/4FY5epgiYKh3ddvHkZJz+Zm/DEL2jIgBz/sigqW2DjZD3qlUtPlJPeCPFmXI+8bPNEffAKQ3pM2PeVRnpv/OieCbP+z5oCHlWs5W7e4NZabI/tqtYk6WuqK9jdu1korsAcqGN3YTY6a8w3OPhtt43jpte19RB9pa6BkA2DH0Z9gGC/tnczV81sa2uf4JiFncW5ubMcOze0tsWt/nFLACXKHC7Yh8zGTEHfY2NVFBcb3wqHBrpvtAM7gMFAvcwFtL/1LReR+Fx3cMN+azsXL2ZeWDU0gkePVfHzzf1ZyDv4nKA7/9/wVf5PNOSMBxZqQlOfqUg1KrL7jtIeV1AwYgQD4JrxcQrFvFpIaOYTKIYsQdWsoEnZgc6oXeg1BzBiW/LkUbMITuQwtjQDCFOOQzHhO1RTHqBJ+QCdBb+hNxUHI85j5Jyj1tJhPEESRSovl/O6YrNi20hhWJyHtGKzRNLCgCoi4tSDvK+XTz6ZjKyITDHAWaL5UYp5TGwWPglshsxmG28ntiKkUK9CSu1h3t646kpeis0CoBMEIqEQFU9WjqdT2FhhrzwFC5/Pg2iKmUlIA6HKKkIIJ715ni8vPh3QZJm1E+FWLnEqofFDURgPI2wseEnAgpitmA3PXt2qCKKgvBQOiNiF8UalcFeZ1/IKyxtugBHmURklamR0ypHkmSlpVh3riLCyDgAAAA==') format('woff2'),
  url('./iconfont.woff?t=1588833061197') format('woff'),
  url('./iconfont.ttf?t=1588833061197') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1588833061197#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export default GlobalFontStyle