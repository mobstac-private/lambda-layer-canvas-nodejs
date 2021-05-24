let { registerFont, createCanvas } = require('canvas');

describe('Canvas', function() {
  describe('#registerFont', function() {
    it('should register defined Font by name', function() {
      registerFont('/usr/share/fonts/google-noto/NotoSansGothic-Regular.ttf', { family: 'Noto Sans Gothic Regular' });
    });
  }),
  describe('#fillText', function() {
    it('should write defined Text in canvas', function() {
      registerFont('/usr/share/fonts/google-noto/NotoSansGothic-Regular.ttf', { family: 'Noto Sans Gothic Regular' });
      let canvas = createCanvas(300, 300);
      let ctx1 = canvas.getContext('2d');
      ctx1.font = '30px';
      ctx1.fillText('Default', 5, 15);
      let ctx2 = canvas.getContext('2d');
      ctx2.font = '30px "DejaVu Sans"';
      ctx2.fillText('DejaVu Sans', 5, 45);
      let ctx3 = canvas.getContext('2d');
      ctx3.font = '30px "Noto Sans Gothic Regular"';
      ctx3.fillText('Noto Sans Gothic Regular', 5, 75);
      console.log(canvas.toDataURL());
    })
  });
});
