var ckInlineEditor=document.querySelectorAll(".ckeditor-inline");ckInlineEditor&&Array.from(ckInlineEditor).forEach((function(){InlineEditor.create(document.querySelector(".ckeditor-inline")).catch((function(e){console.error(e)}))}));