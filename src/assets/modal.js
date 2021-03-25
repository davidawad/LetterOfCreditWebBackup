var myExtObject = (function() {

    return {
      loadModal: function() {
        $('#modal-container').removeAttr('class').addClass('one');
        $('body').addClass('modal-active');
        setTimeout(this.closeModal(), 3000);
      },
      closeModal: function() {
        $('#modal-container').removeAttr('class');
        $(this).addClass('out');
        $('body').removeClass('modal-active');
      }
    }

  })(myExtObject||{})
