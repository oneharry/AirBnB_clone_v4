const readyFunc = () => {
  const attr = {};
  const id = this.attr('data-id');
  const name = this.attr('data-name');

  $('input:checkbox').change(() => {
    if (this.checked) {
      attr[id] = name;
    } else {
      delete attr['data-id'];
    }
  });
  attrList = Object.values(attr).join(',');
  $('DIV.amenities h4').text(attrList);
};

$(document).ready(readyFun);
