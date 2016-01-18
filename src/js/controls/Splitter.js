lm.controls.Splitter = function( isVertical, size, resizeEnabled ) {
	this._isVertical = isVertical;
	this._size = size;

	this.element = this._createElement(resizeEnabled);
        if (resizeEnabled) {
            this._dragListener = new lm.utils.DragListener( this.element );
        }
};

lm.utils.copy( lm.controls.Splitter.prototype, {
	on: function( event, callback, context ) {
		this._dragListener.on( event, callback, context );
	},

	_$destroy: function() {
		this.element.remove();
	},

	_createElement: function(resizeEnabled) {
                var element;
                if (resizeEnabled) {
                    element = $( '<div class="lm_splitter lm_splitter_hover"><div class="lm_drag_handle"></div></div>' );
                } else {
                    element = $( '<div class="lm_splitter"><div></div></div>' );
                }
		element.addClass( 'lm_' + ( this._isVertical ? 'vertical' : 'horizontal' ) );
		element[ this._isVertical ? 'height' : 'width' ]( this._size );

		return element;
	}
});
