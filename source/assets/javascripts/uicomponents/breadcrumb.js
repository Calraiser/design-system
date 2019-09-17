

var OverflowMenu = CarbonComponents.OverflowMenu;

OverflowMenu.create(document.getElementById('bx--overflow-menu'), {
  objMenuOffset(menuBody, direction) {
    const { objMenuOffset: offset } = OverflowMenu.options;
    const { top, left } =
      typeof offset !== 'function' ? offset : offset(menuBody, direction);
    return {
      top: top + 8,
      left: 100,
    };
  },
});
