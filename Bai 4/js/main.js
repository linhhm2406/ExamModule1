function render() {
    renderCanvasBackground(DEFAULT_CANVAS_BACKGROUND_WIDTH,DEFAULT_CANVAS_BACKGROUND_HEIGHT);
    let circle = new Circle(CIRCLE_INIT_X_POSITION,CIRCLE_INIT_Y_POSITION,CIRCLE_INIT_RADIUS,CIRCLE_INIT_COLOR);
    circle.renderCircle();
}

render();