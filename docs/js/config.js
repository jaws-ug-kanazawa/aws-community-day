ACMS.Config({

  // 試験機能をv1.6α時点でデフォルトOFF
  experimentalFeature: true,

  //---------------------------------------------------
  // jQuery UI テーマ名 ( 下記URLでDLとカスタマイズが可能 )
  // @url http://jqueryui.com/themeroller/
  uiTheme: 'smoothness',

  //----------------------
  // google code prettify
  googleCodePrettifyClass: 'prettyprint linenums', // prettyprint linenums, acms-admin-pre
  googleCodePrettifyTheme: 'prettify', // prettify, desert, doxy, sons-of-obsidian, sunburst

  //--------
  // 絵文字
  emoMark: 'textarea.js-emoditor', // セレクタの示す要素で絵文字 ( ウィジウィグ ) エディターが利用出来ます。
  emoToolbar: [
    ['Source', '-', 'Templates'],
    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
    ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
    ['Maximize', 'ShowBlocks'],
    '/',
    ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
    ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Link', 'Unlink', 'Anchor'],
    ['Table', 'HorizontalRule'],
    '/',
    ['Styles', 'Format', 'Font', 'FontSize'],
    ['TextColor', 'BGColor']
  ],
  emoConfig: { //http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
    enterMode: 1, // 1:<p>, 2:<br>, 3:<div>
    fontSize_sizes: '80%/80%;90%/90%;100%/100%;110%/110%;120%/120%;130%/130%;140%/140%;150%/150%;160%/160%;170%/170%;180%/180%;190%/190%;200%/200%',
    font_names: 'MSゴシック/MS Gothic, Osaka-Mono, monospace; MS Pゴシック/MS PGothic, Osaka, sans-serif; MS UI Gothic/MS UI Gothic, Meiryo, Meiryo UI, Osaka, sans-serif; MS P明朝/MS PMincho, Saimincho, serif; Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif',
    language: 'ja'
  },
  emoArray: [
    //    {
    //        'mark'      : '',
    //        'toolbar'   : [],
    //        'config'    : {}
    //    }
  ],

  //----------
  // CKEditor
  ckeMark: 'textarea.js-ckeditor',

  //----------------------------------
  // イメージビューア ( prettyPhoto )
  ppMark: 'a[rel^="prettyPhoto"],a[data-rel^="prettyPhoto"]',
  ppMinWindowSize: 800,
  ppDisableMobile: true,
  ppDisableTablet: true,
  ppWindowTarget: '',
  ppConfig: // http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/
  {
    animation_speed: 'fast', /* fast/slow/normal */
    slideshow: 3000, /* false OR interval time in ms */
    autoplay_slideshow: false, /* true/false */
    opacity: 0.80, /* Value between 0 and 1 */
    show_title: true, /* true/false */
    allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    default_width: 500,
    default_height: 344,
    counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
    theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
    horizontal_padding: 20, /* The padding on each side of the picture */
    hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    wmode: 'opaque', /* Set the flash wmode attribute */
    autoplay: true, /* Automatically start videos: True/False */
    modal: false, /* If set to true, only the close button will close the window */
    deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
    overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
    changepicturecallback: function () {
    }, /* Called everytime an item is shown/changed */
    callback: function () {
    }, /* Called when prettyPhoto is closed */
    ie6_fallback: true,
    markup: '<div class="pp_pic_holder"> \
                    <div class="ppt">&nbsp;</div> \
                    <div class="pp_top"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                    </div> \
                    <div class="pp_content_container"> \
                        <div class="pp_left"> \
                        <div class="pp_right"> \
                            <div class="pp_content"> \
                                <div class="pp_loaderIcon"></div> \
                                <div class="pp_fade"> \
                                    <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                    <div class="pp_hoverContainer"> \
                                        <a class="pp_next" href="#">next</a> \
                                        <a class="pp_previous" href="#">previous</a> \
                                    </div> \
                                    <div id="pp_full_res"></div> \
                                    <div class="pp_details"> \
                                        <div class="pp_nav"> \
                                            <a href="#" class="pp_arrow_previous">Previous</a> \
                                            <p class="currentTextHolder">0/0</p> \
                                            <a href="#" class="pp_arrow_next">Next</a> \
                                        </div> \
                                        <p class="pp_description"></p> \
                                        {pp_social} \
                                        <a class="pp_close" href="#">Close</a> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                        </div> \
                    </div> \
                    <div class="pp_bottom"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                    </div> \
                </div> \
                <div class="pp_overlay"></div>',
    gallery_markup: '<div class="pp_gallery"> \
                            <a href="#" class="pp_arrow_previous">Previous</a> \
                            <div> \
                                <ul> \
                                    {gallery} \
                                </ul> \
                            </div> \
                            <a href="#" class="pp_arrow_next">Next</a> \
                        </div>',
    image_markup: '<img id="fullResImage" src="{path}" />',
    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="sameDomain" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="sameDomain" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
    inline_markup: '<div class="pp_inline">{content}</div>',
    custom_markup: '',
    social_tools: false
  },
  ppCaption2Title: true,

  //----------------------------------
  // イメージビューワー ( Highslide )
  hsMark: 'a[rel=highslide],a[data-rel=highslide]',
  hsConfig: // http://highslide.com/ref/hs.overrides
  {
    align: 'center',
    transitions: ["fade"],
    transitionDuration: 500,
    dimmingOpacity: 0.75, // 背景を半透明グレーにする時に指定します
    dimmingDuration: 0
    //        outlineType : 'rounded-white'
  },
  hsLang: {
    loadingText: ACMS.i18n('highslide.loading_text'),
    loadingTitle: ACMS.i18n('highslide.loading_title'),
    fullExpandTitle: ACMS.i18n('highslide.expand_title'),
    restoreTitle: ACMS.i18n('highslide.restore_title')
  },
  hsArray: [
    //    {
    //        'mark'      : '',
    //        'config'    : {}
    //    }
  ],

  //-----------------------
  // SmartPhoto
  SmartPhotoMark: 'a[data-rel^=SmartPhoto],.js-smartphoto',
  SmartPhotoConfig: {
    classNames: {
      smartPhoto: 'smartphoto',
      smartPhotoClose: 'smartphoto-close',
      smartPhotoBody: 'smartphoto-body',
      smartPhotoInner: 'smartphoto-inner',
      smartPhotoContent: 'smartphoto-content',
      smartPhotoImg: 'smartphoto-img',
      smartPhotoImgOnMove: 'smartphoto-img-onmove',
      smartPhotoImgElasticMove: 'smartphoto-img-elasticmove',
      smartPhotoImgWrap: 'smartphoto-img-wrap',
      smartPhotoArrows: 'smartphoto-arrows',
      smartPhotoNav: 'smartphoto-nav',
      smartPhotoArrowRight: 'smartphoto-arrow-right',
      smartPhotoArrowLeft: 'smartphoto-arrow-left',
      smartPhotoImgLeft: 'smartphoto-img-left',
      smartPhotoImgRight: 'smartphoto-img-right',
      smartPhotoList: 'smartphoto-list',
      smartPhotoListOnMove: 'smartphoto-list-onmove',
      smartPhotoHeader: 'smartphoto-header',
      smartPhotoCount: 'smartphoto-count',
      smartPhotoCaption: 'smartphoto-caption',
      smartPhotoDismiss: 'smartphoto-dismiss',
      smartPhotoLoader: 'smartphoto-loader',
      smartPhotoLoaderWrap: 'smartphoto-loader-wrap',
      smartPhotoImgClone: 'smartphoto-img-clone'
    },
    message: {
      gotoNextImage: ACMS.i18n('smartphoto.goto_next_image'),
      gotoPrevImage: ACMS.i18n('smartphoto.goto_prev_image'),
      closeDialog: ACMS.i18n('smartphoto.close_the_image_dialog')
    },
    arrows: true,
    nav: true,
    animationSpeed: 300,
    swipeOffset: 100,
    headerHeight: 60,
    footerHeight: 60,
    forceInterval: 10,
    registance: 0.5,
    resizeStyle: 'fit',
    verticalGravity: false,
    useOrientationApi: false,
    useHistoryApi: true
  },

  //----------------
  // contrast color
  contrastColorTarget: '.js-contrast-color',

  //--------------------
  // document-outliner
  documentOutlinerMark: '.js-outline',
  documentOutlinerConfig: {
    link: true,
    listType: 'ol',
    listClassName: 'acms-ol',
    itemClassName: 'acms-ol-item',
    linkClassName: 'scrollTo',
    anchorName: 'heading-$1',
    exceptClass: 'js-except',
    levelLimit: 5
  },

  //-----------------------
  // modal video
  modalVideoMark: '.js-modal-video',
  modalVideoConfig: {
    channel: 'youtube',
    youtube: {
      autoplay: 1,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark'
    },
    ratio: '16:9',
    vimeo: {
      api: false,
      autopause: true,
      autoplay: true,
      byline: true,
      callback: null,
      color: null,
      height: null,
      loop: false,
      maxheight: null,
      maxwidth: null,
      player_id: null,
      portrait: true,
      title: true,
      width: null,
      xhtml: false
    },
    allowFullScreen: true,
    animationSpeed: 300,
    classNames: {
      modalVideo: 'modal-video',
      modalVideoClose: 'modal-video-close',
      modalVideoBody: 'modal-video-body',
      modalVideoInner: 'modal-video-inner',
      modalVideoIframeWrap: 'modal-video-movie-wrap',
      modalVideoCloseBtn: 'modal-video-close-btn'
    },
    aria: {
      openMessage: ACMS.i18n('modal_video.aria_open_msg'),
      dismissBtnMessage: ACMS.i18n('modal_video.dismiss_msg')
    }
  },

  //------
  // exif
  exif: {
    captionEnable: "off",
    saveData: "off",
    requireField: ['FocalLength'],
    captionFormat: '<%= Model %> (<%= FocalLength %>mm, f/<%= FNumber %>, <%= ExposureTime %>sec, ISO<%= ISOSpeedRatings %>) <%- ACMS.Library.Dayjs( DateTimeOriginal, "YYYY/MM/DD HH:mm") %>',
    dataFormat: 'Model:<%= Model %>__FocalLength:<%= FocalLength %>__FNumber:<%= FNumber %>__ExposureTime:<%= ExposureTime %>__ISOSpeedRatings:<%= ISOSpeedRatings %>__DateTimeOriginal:<%= DateTimeOriginal %>'
  },

  //-----------------------
  // adaptive image sizing
  adaptiveImageMark: 'img.js-adaptive_image',
  adaptiveImageSize: 500,

  //------------
  // biggerlink
  biggerlinkMark: '.js-biggerlink',
  biggerlinkConf: {
    //        biggerclass:'bl-bigger', 	// class added to the first contained link and others that trigger it
    //        hoverclass:'bl-hover', 		// class added to parent element on hover/focus
    //        hoverclass2:'bl-hover2', 	// class added to parent element on hover/focus of other links
    //        clickableclass:'bl-hot', 	// class added to parent element with behaviour
    //        otherstriggermaster: true,	// will all links in containing biggerlink element trigger the first link
    //        follow: 'auto'
  },
  biggerlinkArray: [
    //    {
    //        'mark'  : '',
    //        'conf'  : {}
    //    }
  ],

  //----------
  // bxslider
  bxsliderMark: '.js-bxslider',
  bxsliderConf: {
    mode: 'horizontal', // horizontal | vertical | fade
    speed: 800,
    captions: true,
    auto: true,
    pause: 6000
  },
  bxsliderArray: [
    //    {
    //        'mark'  : '',
    //        'conf'  : {}
    //    }
  ],

  //-----------------------------
  // module setting popup window
  popupSettingMark: '.js-popup_setting',
  popupSettingConf: {
    width: 850,
    height: 500,
    autoclose: true,
    autoreload: true
  },

  moduleManagementMark: '.js-module_management',
  moduleManagementReloadMsg: ACMS.i18n('module_management.reload_msg'),
  moduleUnitDirectAddMsg: ACMS.i18n('module_management.unit_direct_add_msg'),

  dialogBtnMark: '.js-dialog-btn',
  dialogTitleMark: '.js-dialog-title',
  dialogBodyMark: '.js-dialog-body',

  //-------------
  // scroll hint
  scrollHintMark: '.js-scroll-hint',
  scrollHintConfig: {
    suggestClass: 'is-active',
    scrollableClass: 'is-scrollable',
    scrollableRightClass: 'is-right-scrollable',
    scrollableLeftClass: 'is-left-scrollable',
    scrollHintClass: 'scroll-hint',
    scrollHintIconClass: 'scroll-hint-icon',
    scrollHintIconAppendClass: 'scroll-hint-icon-white',
    scrollHintIconWrapClass: 'scroll-hint-icon-wrap',
    scrollHintText: 'scroll-hint-text',
    remainingTime: -1,
    scrollHintBorderWidth: 10,
    enableOverflowScrolling: true,
    suggestiveShadow: false,
    applyToParents: false,
    i18n: {
      scrollable: ACMS.i18n("scrollhint.scrollable")
    }
  },

  //---------
  // a-table
  aTableMark: '[class^=js-editable-table]',
  aTableDestMark: '.js-editable-table-dest',
  aTableFieldMark: '.js-editable-table-field',
  aTableConf: {
    align: {
      default: 'acms-cell-text-left',
      left: 'acms-cell-text-left',
      center: 'acms-cell-text-center',
      right: 'acms-cell-text-right'
    },
    btn: {
      group: 'acms-admin-btn-group acms-admin-btn-group-inline',
      item: 'acms-admin-btn',
      itemActive: 'acms-admin-btn acms-admin-btn-active'
    },
    icon: {
      alignLeft: 'acms-admin-icon-text-left',
      alignCenter: 'acms-admin-icon-text-center',
      alignRight: 'acms-admin-icon-text-right',
      undo: 'acms-admin-icon-undo',
      merge: 'acms-admin-icon-merge',
      split: 'acms-admin-icon-split',
      source: 'acms-admin-icon-source',
      td: '',
      th: ''
    }
  },
  aTableSelector: [
    { label: ACMS.i18n('a_table.not_newline'), value: 'acms-cell-text-nowrap acms-admin-cell-text-nowrap' },
    { label: ACMS.i18n('a_table.bold'), value: 'acms-cell-text-bold acms-admin-cell-text-bold' },
    { label: ACMS.i18n('a_table.top_alignment'), value: 'acms-cell-text-top acms-admin-cell-text-top' },
    { label: ACMS.i18n('a_table.center_alignment'), value: 'acms-cell-text-middle acms-admin-cell-text-middle' },
    { label: ACMS.i18n('a_table.bottom_alignment'), value: 'acms-cell-text-bottom acms-admin-cell-text-bottom' }
  ],
  // テーブル自体にクラスを付与できます
  aTableOption: [
    { label: ACMS.i18n("a_table.scrollhint_table"), value: 'js-table-unit-scroll-hint' },
    { label: ACMS.i18n("a_table.scrollable_table"), value: 'acms-table-scrollable' }
  ],
  aTableMessage: {
    mergeCells: ACMS.i18n('a_table.merge_cell'),
    splitCell: ACMS.i18n('a_table.split_cell'),
    changeToTh: ACMS.i18n('a_table.change_to_th'),
    changeToTd: ACMS.i18n('a_table.change_to_td'),
    alignLeft: ACMS.i18n('a_table.align_left'),
    alignCenter: ACMS.i18n('a_table.align_center'),
    alignRight: ACMS.i18n('a_table.align_right'),
    addColumnLeft: ACMS.i18n('a_table.add_column_left'),
    addColumnRight: ACMS.i18n('a_table.add_column_right'),
    removeColumn: ACMS.i18n('a_table.remove_column'),
    addRowTop: ACMS.i18n('a_table.add_row_top'),
    addRowBottom: ACMS.i18n('a_table.add_row_bottom'),
    removeRow: ACMS.i18n('a_table.remove_row'),
    source: ACMS.i18n('a_table.source'),
    mergeCellError1: ACMS.i18n('a_table.merge_cell_error1'),
    mergeCellConfirm1: ACMS.i18n('a_table.merge_cell_confirm1'),
    pasteError1: ACMS.i18n('a_table.paste_error1'),
    splitError1: ACMS.i18n('a_table.split_error1'),
    splitError2: ACMS.i18n('a_table.split_error2'),
    splitError3: ACMS.i18n('a_table.split_error3'),
  },
  //---------
  // navigation module language
  navigationEditMark: '#js-navigation-edit',
  navigationMessage: {
    detail: ACMS.i18n('navigation.detail'),
    add: ACMS.i18n('navigation.add'),
    open: ACMS.i18n('navigation.open'),
    close: ACMS.i18n('navigation.close'),
    attr: ACMS.i18n('navigation.attr'),
    child_attr: ACMS.i18n('navigation.child_attr'),
    remove: ACMS.i18n('navigation.remove'),
    label: ACMS.i18n('navigation.label'),
    onRemove: ACMS.i18n('nestable.on_remove'),
    onFirstUpdate: ACMS.i18n('navigation.on_first_update')
  },

  bannerEditMark: '#js-banner-edit',
  bannerMessage: {
    onRemove: ACMS.i18n("media.on_banner_remove")
  },

  //---------
  // admin-menu
  adminMenuEditMark: '#js-admin-menu-edit',

  //----------
  // LiteEditor
  LiteEditorFeature: true,
  LiteEditorUseEmojiPicker: true, //スマホの場合は強制的にfalseになります。
  LiteEditorEmojiPickerLabel: '<i class="lite-editor-emoji-font lite-editor-emoji-font-smile" aria-hidden="true"></i>',
  LiteEditorMark: '.js-lite-editor-field',
  LiteEditorFieldConf: {}, // カスタムフィールドで利用するLiteEditorの設定
  LiteEditorSourceModeTags: /^(ul|ol|dl|pre|blockquote|none|markdown|wysiwyg|table|template|div)/, //テキストユニット内でソース入力モードになります。
  LiteEditorConf: {
    minHeight: 50,
    maxHeight: 650,
    nl2br: false,
    classNames: {
      LiteEditor: 'entryFormLiteEditor',
      LiteEditorSource: 'entryFormTextarea',
      LiteEditorBtnGroup: 'acms-admin-btn-group acms-admin-btn-group-inline',
      LiteEditorBtn: 'acms-admin-btn',
      LiteEditorBtnActive: 'acms-admin-btn acms-admin-btn-active',
      LiteEditorBtnClose: '',
      LiteEditorTooltipInput: 'acms-admin-form-width-full'
    },
    btnPosition: 'bottom',
    escapeNotRegisteredTags: false,
    relAttrForTargetBlank: 'noopener noreferrer',
    message: {
      addLinkTitle: ACMS.i18n('lite_editor.add_link_title'),
      updateLinkTitle: ACMS.i18n('lite_editor.update_link_title'),
      addLink: ACMS.i18n('lite_editor.add_link'),
      updateLink: ACMS.i18n('lite_editor.update_link'),
      removeLink: ACMS.i18n('lite_editor.remove_link'),
      linkUrl: ACMS.i18n('lite_editor.link_url'),
      linkLabel: ACMS.i18n('lite_editor.link_label'),
      targetBlank: ACMS.i18n('lite_editor.target'),
      targetBlankLabel: ACMS.i18n('lite_editor.target_label')
    },
    btnOptions: [
      { label: ACMS.i18n("lite_editor.link"), tag: 'a', className: '', sampleText: ACMS.i18n("lite_editor.link_sample_txt") },
      { label: ACMS.i18n("lite_editor.em"), tag: 'em', className: '', sampleText: ' ' },
      { label: ACMS.i18n("lite_editor.strong"), tag: 'strong', className: '', sampleText: ' ' }
      // { label: '下線', tag: 'u', className: '', sampleText: ' '},
    ]
  },

  //---------
  mediaAdminMark: '#js-media-edit',
  mediaFieldMark: '.js-media-field',
  mediaShowAltAndCaptionOnModal: false,
  mediaCropSizes: [
    [16, 9],
    [4, 3],
    [3, 4],
    [1, 1]
  ],

  //--------
  // select2
  select2Mark: '.js-select2',
  select2Threshold: 10,
  select2Config: {}, // https://select2.org/configuration/options-api

  quickSearchFeature: true,
  quickSearchCommand: ['command + k', 'ctrl + k'],
  //----------
  // autoHeight
  autoHeightMark: '.js-autoheight',
  autoHeightConfArray: [
    {
      '.column3': '3', // クラス名と高さを揃えるコンテンツ数
      '.column2': '2'
    }
  ],

  //-------------
  // autoHeightR
  autoHeightRMark: '.js-autoheight-r',
  autoHeightRConf: {
    style: 'height',
    element: '',       // 高さのスタイルを適応するクラス（空の場合はautoHeightRMarkの要素に適応）
    offset: 0,
    parent: 'parent', // parent : autoHeightRMarkクラスの一個上の要素 or 指定した要素
    list: ''        // 実際に並んでいる要素のクラスを指定（指定してない場合、autoHeightRMarkの一個上の要素）
  },
  autoHeightRArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //--------------------
  // 日付選択カレンダー
  dpicMark: 'input:text[name$=date]:not(.js-datepicker2), .js-datepicker', // セレクタの指し示す要素をクリックで日付選択カレンダーを利用出来ます
  dpicConfig: {
    closeText: ACMS.i18n('datepic.close'),
    prevText: ACMS.i18n('datepic.prev'),
    nextText: ACMS.i18n('datepic.next'),
    currentText: ACMS.i18n('datepic.current'),
    monthNames: [
      ACMS.i18n('datepic.month.jan'),
      ACMS.i18n('datepic.month.feb'),
      ACMS.i18n('datepic.month.mar'),
      ACMS.i18n('datepic.month.apr'),
      ACMS.i18n('datepic.month.may'),
      ACMS.i18n('datepic.month.jun'),
      ACMS.i18n('datepic.month.jul'),
      ACMS.i18n('datepic.month.aug'),
      ACMS.i18n('datepic.month.sep'),
      ACMS.i18n('datepic.month.oct'),
      ACMS.i18n('datepic.month.nov'),
      ACMS.i18n('datepic.month.dec')
    ],
    monthNamesShort: [
      ACMS.i18n('datepic.month.jan'),
      ACMS.i18n('datepic.month.feb'),
      ACMS.i18n('datepic.month.mar'),
      ACMS.i18n('datepic.month.apr'),
      ACMS.i18n('datepic.month.may'),
      ACMS.i18n('datepic.month.jun'),
      ACMS.i18n('datepic.month.jul'),
      ACMS.i18n('datepic.month.aug'),
      ACMS.i18n('datepic.month.sep'),
      ACMS.i18n('datepic.month.oct'),
      ACMS.i18n('datepic.month.nov'),
      ACMS.i18n('datepic.month.dec')
    ],
    dayNames: [
      ACMS.i18n('datepic.week.sun'),
      ACMS.i18n('datepic.week.mon'),
      ACMS.i18n('datepic.week.tue'),
      ACMS.i18n('datepic.week.wed'),
      ACMS.i18n('datepic.week.thu'),
      ACMS.i18n('datepic.week.fri'),
      ACMS.i18n('datepic.week.sat')
    ],
    dayNamesShort: [
      ACMS.i18n('datepic.week_short.sun'),
      ACMS.i18n('datepic.week_short.mon'),
      ACMS.i18n('datepic.week_short.tue'),
      ACMS.i18n('datepic.week_short.wed'),
      ACMS.i18n('datepic.week_short.thu'),
      ACMS.i18n('datepic.week_short.fri'),
      ACMS.i18n('datepic.week_short.sat')
    ],
    dayNamesMin: [
      ACMS.i18n('datepic.week_min.sun'),
      ACMS.i18n('datepic.week_min.mon'),
      ACMS.i18n('datepic.week_min.tue'),
      ACMS.i18n('datepic.week_min.wed'),
      ACMS.i18n('datepic.week_min.thu'),
      ACMS.i18n('datepic.week_min.fri'),
      ACMS.i18n('datepic.week_min.sat')
    ],
    dateFormat: 'yy-mm-dd',
    firstDay: 0,
    isRTL: false,
    constrainInput: false
  },
  dpicArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],
  flatDatePicker: '.js-datepicker2',
  flatDatePickerConfig: {
    allowInput: true,
    locale: /^ja/.test(ACMS.i18n.lng) ? 'ja' : 'en',
    dateFormat: 'Y-m-d'
  },
  flatTimePicker: '.js-timepicker',
  flatTimePickerConfig: {
    allowInput: true,
    locale: /^ja/.test(ACMS.i18n.lng) ? 'ja' : 'en',
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i:S",
    time_24hr: true
  },
  //-----------
  // accordion
  accordionMark: '.js-accordion',
  accordionConfig: {
    active: null,
    animated: 'slide', // ( 'slide' | 'fade' | '' )
    heightStyle: 'content',
    collapsible: true
  },
  accordionArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //------
  // tabs
  tabsMark: '.js-tabs',
  tabsConfig: {
    collapsible: false,
    cookie: null,
    fx: {
      //opacity : 'toggle', // クロスフェード
      //height  : 'toggle', // 縦スライド
      //duration: 'fast' // ( 'fast' | 'normal' | 'slow' | '' )
    }
  },
  tabsArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //----------
  // acms tabs
  acmsTabsMark: '.js-acms_tabs',
  acmsTabsConfig: {
    tabClass: 'js-acms_tab',
    activeClass: 'js-acms_tab-active',
    readyMark: '.js-ready-acms_tabs' // e.g. window.document.location.hash
  },
  acmsTabsArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //------------------
  // acms alert close
  acmsAlertCloseMark: '.js-acms-alert-close',
  acmsAlertCloseConfig: {
    target: '.acms-admin-alert'
  },
  acmsAlertCloseArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //-------
  // fader
  faderMark: '.js-fader',
  faderStorageMark: '.js-fader-storage',
  faderConfig: {
    initial: 'hide', // ( 'hide' | 'show' )
    effect: 'fade', // ( 'fade' | 'slide' | '' )
    speed: 'fast', // ( 'fast' | 'slow' )
    activeClass: 'js-fader-active',
    readyMark: '.js-ready-fader' // e.g. window.document.location.hash
  },
  faderArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  //--------
  // toggle
  toggleMark: '.js-toggle',
  toggleConfig: {
    speed: 'fast', // ( 'fast' | 'slow' )
    readyMark: '.js-ready-toggle',
    hideMark: '.js-hide-toggle',
    toggleHead: '.toggle-head'
  },
  toggleArray: [
    //    {
    //        'mark'    : '',
    //        'config'  : {}
    //    }
  ],

  externalFormSubmitButton: '.js-external-form-btn',

  //-----------------------
  // タイトルの編集
  editInplateTitleMark: '.entryTitle,.entry-title',

  //-----------------------------------
  // エントリーの位置情報編集時のデフォルト
  adminLocationDefaultLat: '35.185574',
  adminLocationDefaultLng: '136.899066',
  adminLocationDefaultZoom: '10',

  //----------------
  // OpenStreetMap
  openStreetMapMark: '.js-open-street-map',
  openStreetMapTileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

  //----------------------------
  // 静的グーグルマップの動的化
  s2dMark: '[class^="column-map-"]>img:not(.js-s2d-ready)',
  s2dReadyMark: 'img.js-s2d-ready',
  s2dMaxSize: 640,
  s2dPinShadowImg: 'http://maps.google.co.jp/mapfiles/ms/icons/msmarker.shadow.png',
  s2dRegion: '', // JP
  s2dStyle: [
    // {
    //     stylers: [
    //         { hue: "#00ffe6" },
    //         { saturation: -20 }
    //     ]
    // },{
    //     featureType: "road",
    //     elementType: "geometry",
    //     stylers: [
    //         { lightness: 100 },
    //         { visibility: "simplified" }
    //     ]
    // },{
    //     featureType: "road",
    //     elementType: "labels",
    //     stylers: [
    //         { visibility: "off" }
    //     ]
    // }
  ],

  //-------------------
  // yahoo map (YOLP)
  yahoo_api_url : (function(protocol) {
    if (protocol !== 'https:') {
      return 'http://js.api.olp.yahooapis.jp/OpenLocalPlatform/V1/jsapi?appid=' + ACMS.Config.yahooApiKey;
    } else {
      return 'https://map.yahooapis.jp/js/V1/jsapi?appid=' + ACMS.Config.yahooApiKey;
    }
  })(location.protocol),
  yolpLayerSet: 'on',

  //---------------------------
  // 静的ヤフーマップの動的化 (YOLP)
  s2dYolpMark: '[class^="column-yolp-"]>img:not(.js-s2d-ready)',
  s2dYolpReadyMark: 'img.js-s2d-yolp-ready',

  //-----------
  // swfobject
  swfoMark: '.swfobject', // パラメータが指定されたdl要素をflashに置き換えます。

  //--------------
  // 離脱時アラート
  unloadAlertMark: '.js-unload_alert',

  //--------------------
  // スタイルの切り替え
  styleSwitchMark: 'a.styleswitch',
  styleSwitchStyleMark: 'link.styleswitch',
  // リンク要素のタイトル属性を利用してスタイルシートを切り替えることが出来ます。
  // 例)
  // <link rel="stylesheet" type="text/css" href="xxx.css" title="a" class="styleswitch" />
  // <link rel="stylesheet" type="text/css" href="yyy.css" title="b" class="styleswitch" />
  //
  // <a href="#" class="styleswitch" rel="a">スタイルを[a]に切り替える</a>
  // <a href="#" class="styleswitch" rel="b">スタイルを[b]に切り替える</a>

  //------------
  // スクロール
  scrollToMark: 'a.scrollTo', // セレクタのアンカーをクリックするとhref属性のフラグに指定された要素へスクロールします。
  scrollToI: 40, // 間隔(i)msec
  scrollToV: 0.5, // 0 < 移動量(v) < 1
  // 例)
  // <a name="a"></a>
  // <div id="b"></div>
  //
  // <a href="#a" class="scrollTo" />
  // <a href="#b" class="scrollTo" />
  // <a href="#" class="scrollTo" /> ※フラグ名が指定されない（特定出来ない）場合はページの最上部へスクロールします。
  //--------------------
  // オフキャンバス
  offcanvas: {
    'fixedHeaderMark': '.js-offcanvas-header',
    'openBtnMark': '.js-offcanvas-btn',//offcanvasを開くボタンのクラス
    'openBtnRMark': '.js-offcanvas-btn-r',//offcanvasを右方向に開くボタンのクラス
    'openBtnLMark': '.js-offcanvas-btn-l',//offcanvasを左方向に開くボタンのクラス
    'closeBtnMark': '.js-offcanvas-close',//offcanvasを閉じるボタンのクラス
    'offcanvasMark': '.js-offcanvas',//offcanvasが適応されるエリアのクラス
    'breakpoint': 767, //max-widthで指定,'all'を指定すると全画面,
    'throttleTime': 100
  },
  //--------------------
  // スクロール時の追随
  //--------------------
  prettyScrollMark: '.js-pretty-scroll',
  prettyScrollConfig: {
    container: '.js-pretty-scroll-container',
    offsetTop: 20,
    offsetBottom: 20,
    breakpoint: 767,
    condition: function () {
      return true;
    }
  },
  //--------------------
  // プレビュー機能の設定
  //--------------------
  previewDevices: [
    {
      name: 'iPhone 6/7/8',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 375,
      height: 667,
      resizable: false,
      hasFrame: true
    },
    {
      name: 'iPhone 6/7/8 Plus',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 414,
      height: 736,
      resizable: false,
      hasFrame: true
    },
    {
      name: 'iPhone 5/SE',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 320,
      height: 568,
      resizable: false,
      hasFrame: true
    },
    {
      name: 'iPhone X',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 375,
      height: 812,
      resizable: false,
      hasFrame: false
    },
    {
      name: 'iPad',
      ua: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      width: 768,
      height: 1024,
      resizable: false,
      hasFrame: true
    },
    {
      name: 'HUAWEI P20 Lite',
      ua: 'Mozilla/5.0 (Linux; Android 8.0.0;HWV32 Build/HUAWEI-HWV32)AppleWebKit/537.36(KHTML,like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36',
      width: 360,
      height: 760,
      resizable: false,
      hasFrame: false
    },
    {
      name: 'Galaxy S9+ SCV39',
      ua: 'Mozilla/5.0 (Linux; Android 8.0.0; SCV39 Build/16NW) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
      width: 360,
      height: 740,
      resizable: false,
      hasFrame: false
    },
    {
      name: 'Xperia XZ2',
      ua: 'Mozilla/5.0 (Linux; Android 8.0.0; SOV37 Build/51.1.C.0.374) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36',
      width: 360,
      height: 720,
      resizable: false,
      hasFrame: false
    },
    {
      name: 'PC',
      ua: 'none',
      width: 1366,
      height: 768,
      resizable: true,
      hasFrame: false
    }
  ],
  // テキストの自動選択
  clickSelectionInputTextMark: ':text.url, textarea.js-click-selection, :text.js-click-selection', // セレクタの示す要素をクリックするとテキストが選択状態になります。
  //-----------
  // Google Translate
  googleTranslateMark: '.js-translate',
  //--------------------------
  // イメージのロールオーバー
  rolloverImgMark: 'img.js-rollover, img.imgover', // セレクタの示す要素をホバーするとイメージがロールオーバーします。
  rolloverImgSuffix: '_o', // ロールオーバー時のファイル名に付けられる接尾辞です。例) banner.jpg -> banner_o.jpg

  //----------------
  // ユニットの幅修正
  unitFixAlign: 'on', // on, off

  //--------------------
  // ユニットグループの整列
  unitGroupAlign: true,
  unitGroupAlignMark: '.js-unit_group-align',
  unitGroupAlignClass: 'acms-admin-clear', // clear: both;
  unitGroupAlignInterval: 400,

  //------------------------
  // 検索ワードのハイライト
  searchKeywordHighlightMark: '.entry, .entryColumn, .entryTitle', // セレクタ要素内に検索ワードが含まれる時、該当箇所がハイライトされます。
  searchKeywordMatchTag: 'mark',
  searchKeywordMatchClass: 'highlight',
  // 例)
  // 検索対象:<div.entry><p>いろはにほへと</p></div>
  // 検索語:「いろ　ほへ」
  // 結果:<div.entry><p><span class="highlight1">いろ</span>はに<span class="highlight2">ほへ</span>と</p></div>

  //---------
  // トグル
  toggleHeadClassSuffix: 'toggle-head', // 切り替える際にクリックする要素
  toggleBodyClassSuffix: 'toggle-body', // 切り替え表示対象の要素
  // 要素の表示非表示をアニメーションで切り替えます ( 初期状態は非表示となります )
  // 例）
  // <h4 class="continue-toggle-head">続きを読む</h4>
  // <p class="continue-toggle-body">本文</p>

  //----------
  // フェード
  fadeHeadClassSuffix: 'fade-head', // 切り替える際にクリックする要素
  fadeBodyClassSuffix: 'fade-body', // 切り替え表示対象の要素
  // 要素の表示非表示を切り替えますフェードのアニメーションで切り替えます ( 初期状態は非表示となります )
  // 例）
  // <h4 class="continue-fade-head">続きを読む</h4>
  // <p class="continue-fade-body">本文</p>

  //-----------
  // validator
  validatorFormMark: 'form.js-validator',
  validatorResultClass: 'validator-result-',
  validatorOkClass: 'valid',
  validatorNgClass: 'invalid',

  //------------
  // eval value
  inputEvalValueMark: '.js-input-eval_value',

  //--------
  // select
  select2textMark: '.js-select_2text',

  //-------------------
  // observe file size
  observeFileSizeMark: '.js-observeFileSize',

  //--------------
  // resize image
  resizeImage: 'on',
  resizeImageTargetMark: '.js-img_resize',
  resizeImageTargetMarkCF: '.js-img_resize_cf',
  resizeImageInputMark: '.js-img_resize_input',
  resizeImagePreviewMark: '.js-img_resize_preview',

  //-------------------
  // password strength
  passwordStrengthMark: '.js-password_strength',
  passwordStrengthInputMark: '.js-input',
  passwordStrengthMeterMark: '.js-meter',
  passwordStrengthLabelMark: '.js-label',
  passwordStrengthMessage: {
    0: ACMS.i18n('password_strength_meter.worst'),
    1: ACMS.i18n('password_strength_meter.bad'),
    2: ACMS.i18n('password_strength_meter.weak'),
    3: ACMS.i18n('password_strength_meter.good'),
    4: ACMS.i18n('password_strength_meter.strong'),
  },

  //--------------
  // post include
  postIncludeOnsubmitMark: '.js-post_include',
  postIncludeOnreadyMark: '.js-post_include-ready',
  postIncludeOnBottomMark: '.js-post_include-bottom',
  postIncludeOnIntervalMark: '.js-post_include-interval',
  postIncludeMethod: 'replace', // ( 'swap' | 'replace' )
  postIncludeEffect: 'slide', // ( 'slide' | 'fade' | '' )
  postIncludeEffectSpeed: 'slow', // ( 'slow' | 'fast' )
  postIncludeOffset: 60,
  postIncludeReadyDelay: 0,
  postIncludeIntervalTime: 20000,
  postIncludeArray: [{
    //        'mark'      : '.js-post_include-original',
    //        'type'      : 'submit',
    //        'method'    : 'swap',
    //        'effect'    : 'slide',
    //        'speed'     : 'slow'
  }],
  postIncludeEvalValueMark: '.js-post_include-eval_value',

  //---------------------
  // link match location
  linkMatchLocationMark: '.js-link_match_location',
  linkMatchLocationFullMark: '.js-link_match_location-full',
  linkMatchLocationBlogMark: '.js-link_match_location-blog',
  linkMatchLocationCategoryMark: '.js-link_match_location-category',
  linkMatchLocationEntryMark: '.js-link_match_location-entry',
  linkMatchLocationContainMark: '.js-link_match_location-contain',
  linkMatchLocationClass: 'stay',
  linkMatchLocationFullClass: 'stay',
  linkMatchLocationBlogClass: 'stay',
  linkMatchLocationCategoryClass: 'stay',
  linkMatchLocationEntryClass: 'stay',
  linkMatchLocationContainClass: 'stay',
  linkMatchLocationArray: [{
    //        'mark'  : '.js-link_match_location-original',
    //        'type'  : 'part', //( 'part' | 'full' | 'blog' | 'category' | 'entry' )
    //        'class' : 'current'
  }],

  //---------
  // viewing
  viewingMark: 'a.js-viewing-receptor', // 1.3.0 未満のバージョンからアップデートする場合には 'a' と指定してください。
  viewingId: 'viewing',
  viewingClass: 'viewing',
  viewingEraseMark: 'a:not(.js-viewing-indelible)', // display:blockの要素は取り除かれません
  viewingReplacement: '',
  viewingRemoveAttr: ['href', 'charset', 'type', 'hreflang', 'rel', 'rev', 'target'],
  viewingNonTarget: ['block', 'inline-block', 'flex', 'grid', 'table'],

  //--------------------
  // link outside blank
  linkOutsideBlankMark: 'a:not([target]):not([href^="javascript"]):not([href^="tel"])', // 外部リンクを新しいウィンドウで開きます。このセレクタで指定される要素に対してのみ処理対象となります
  linkOutsideAppendAttr: 'noopener noreferrer', //外部リンクに付与する属性

  //------------------------------
  // link https disabler, enabler
  linkHttpsDisablerMark: 'a:not([rel*="https"]),a:not([data-rel*="https"])', // 暗号化を利用したhttps通信時に通常のリンクがhttps://になってしまうものをhttp://に書き換えます。
  // a:not([rel*="https"]) というセレクタが設定されている場合はrel属性に"https"と指定されているリンクは書き換えを行わずにhttps://のままになります。
  linkHttpsEnablerMark: 'a[rel*="https"],a[data-rel*="https"]', // 通常のhttp通信時にセレクタに該当するアンカーをhttps://から始まるURLに書き換えます。
  linkHttpsNoRewriteMark: '.js-link_no_rewrite',

  //--------------------
  // adminTableSortable
  adminTableSortableMark: '.js-admin_table-sortable',

  //--------------------
  // fieldgroupSortable
  fieldgroupSortableMark: '.js-fieldgroup-sortable',
  fieldgroupSortableMarkForm: '.js-fieldgroup-sortable-form',
  fieldgroupSortableItemMark: '.sortable-item', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemHandleMark: '.item-handle', // fieldgroupSortableItemMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemDeleteMark: '.item-delete', // fieldgroupSortableItemMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemTemplateMark: '.item-template', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemInsertMark: '.item-insert', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemMaxMark: '.item-max', // fieldgroupSortableMarkの指し示す要素の子要素である必要があります。
  fieldgroupSortableItemDeleteMessage: ACMS.i18n('field_group_sortable.delete_msg'), // 空文字 ('') にした場合は確認せずに削除します。
  fieldgroupSortableItemOverflowMessage1: ACMS.i18n('field_group_sortable.overflow_msg1'), // 最大登録数を超えた時のメッセージの前半。（前半と後半の間に最大数が入ります）
  fieldgroupSortableItemOverflowMessage2: ACMS.i18n('field_group_sortable.overflow_msg2'), // 最大登録数を超えた時のメッセージの後半。（前半と後半の間に最大数が入ります）

  //----------------------
  // innerFieldgroupList
  innerFieldgroupListMark: '.js-inner-fieldgroup-list',
  innerFieldgroupListTemplateMask: '.inner-template',
  innerFieldgroupListDeleteMask: '.inner-delete',
  innerFieldgroupListInputMask: '.inner-input',
  innerFieldgroupListInsertMark: '.inner-insert',
  innerFieldgroupListItemMask: '.inner-item',

  //--------------
  // web storage
  webStorage: 'on',
  webStorageType: 'local',      // local or session
  webStorageCapacity: 'limitless',  // one or limitless
  webStorageInterval: 2000,

  //-----------------
  // banEnterSubmit
  banEnterSubmitMask: '.js-ban-enter-submit',

  //-------
  // ready
  readyFocusMark: ':input.js-ready-focus',
  readyScrollMark: '.js-ready-scroll',

  //-------
  // hover
  hoverMark: '.js-hover',
  hoverClass: 'hover',

  //-------
  // zebra
  zebraMark: '.js-zebra',
  zebraOddClass: 'odd',
  zebraEvenClass: 'even',

  //-------------
  // placeholder
  placeholderMark: '.js-placeholder',
  placeholderColor: 'silver',

  //--------------------
  // incremental search
  incrementalSearchMark: '.js-incremental-search',
  incrementalSearchBoxMark: '.js-search-box',
  incrementalSearchElementMark: '.js-search-element',

  //----------------
  // comment cookie
  commentCookieMark: 'form#comment-form.apply',
  commentCookieUserMark: 'form#comment-form.apply, form#comment-form.reapply',

  //-----------
  // input count up
  countupMark: '.js-countup',
  countupMarkOver: 'acms-admin-text-danger',

  //----------------------
  // external form button
  externalFormButtonMark: '.js-external_submit',

  //-----------
  // copyright
  copyrightMark: 'a#copyright, #copyright a'
});

//--------------
// Config.Admin
ACMS.Config.Admin = {
  //--------------
  // arg guidance
  argGuidance: {
    'Entry_Body': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
    'Entry_List': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
    'Entry_Photo': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
    'Entry_Headline': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
    'Entry_Summary': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],
    'Entry_ArchiveList': ['bid', 'cid', 'keyword', 'tag', 'field_'],
    'Entry_TagRelational': ['bid', 'cid', 'eid', 'keyword', 'start', 'end'],
    'Entry_Continue': ['eid'],
    'Entry_Field': ['eid'],
    'Entry_Calendar': ['bid', 'cid', 'start'],

    'Entry_GeoList': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page'],

    'Admin_Entry_Autocomplete': ['bid', 'uid', 'cid', 'keyword', 'tag', 'field_', 'start', 'end'],

    'Unit_List': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'field_', 'start', 'end', 'page', 'order'],

    'Category_List': ['bid', 'cid', 'keyword', 'field_', 'start', 'end'],
    'Category_EntryList': ['bid', 'uid', 'cid', 'keyword', 'tag', 'field_', 'start', 'end'],
    'Category_GeoList': ['bid', 'cid', 'keyword', 'field_'],
    'Category_EntrySummary': ['bid', 'uid', 'cid', 'keyword', 'tag', 'field_', 'start', 'end'],
    'Category_Field': ['cid'],

    'User_Profile': ['bid', 'uid'],
    'User_Field': ['uid'],
    'User_Search': ['bid', 'uid', 'keyword', 'field_', 'page'],
    'User_GeoList': ['bid', 'uid', 'keyword', 'field_'],

    'Blog_Field': ['bid'],
    'Blog_ChildList': ['bid', 'keyword', 'field_'],
    'Blog_GeoList': ['bid', 'keyword', 'field_'],

    'Tag_Cloud': ['bid', 'eid', 'field_', 'start', 'end'],
    'Tag_Filter': ['bid', 'field_', 'tag'],

    'Calendar_Month': ['bid', 'cid', 'start', 'end'],
    'Calendar_Year': ['bid', 'cid', 'start'],

    'Links': [],
    'Banner': [],
    'Media_Banner': [],
    'Navigation': [],
    'Topicpath': ['bid', 'cid', 'eid'],

    'Comment_Body': ['eid'],
    'Comment_List': ['bid'],

    'Trackback_Body': ['eid'],
    'Trackback_List': ['bid'],

    'Json_2Tpl': [],
    'Feed_Rss2': ['bid', 'uid', 'cid', 'eid', 'keyword', 'tag', 'start', 'end'],
    'Feed_ExList': [],
    'Sitemap': [''],
    'Ogp': [],

    'Shop_Cart_List': [],
    'Case_Time': [],

    'Alias_List': ['bid'],

    'Field_ValueList': ['bid', 'field_'],

    'Form2_Unit': ['eid'],

    'Api_GoogleAnalytics_Ranking': [],
    'Api_Twitter_Statuses_HomeTimeline': ['bid', 'field_', 'page'],
    'Api_Twitter_Statuses_UserTimeline': ['bid', 'field_', 'page'],
    'Api_Twitter_Search': ['bid', 'field_', 'keyword', 'page'],
    'Api_Twitter_List_Statuses': ['bid', 'field_', 'page'],
    'Api_Twitter_List_Members': ['bid', 'field_', 'page'],

    'Api_Instagram_Users_Media_Recent': ['bid', 'field_'],
    'Api_Instagram_Users_Media_Liked': ['bid', 'field_'],

    'Api_Bing_WebSearch': ['bid', 'keyword', 'page'],
    'Api_Bing_ImageSearch': ['bid', 'keyword', 'page'],

    'Plugin_Schedule': ['bid'],
    'Schedule': ['bid']
  },

  //--------------
  // axis guidance
  axisGuidance: {
    'Entry_Body': ['bid_axis', 'cid_axis'],
    'Entry_List': ['bid_axis', 'cid_axis'],
    'Entry_Photo': ['bid_axis', 'cid_axis'],
    'Entry_Headline': ['bid_axis', 'cid_axis'],
    'Entry_Summary': ['bid_axis', 'cid_axis'],
    'Entry_ArchiveList': ['bid_axis', 'cid_axis'],
    'Entry_TagRelational': ['bid_axis', 'cid_axis'],
    'Entry_Continue': [],
    'Entry_Field': [],
    'Entry_Calendar': ['bid_axis', 'cid_axis'],

    'Entry_GeoList': ['bid_axis', 'cid_axis'],

    'Admin_Entry_Autocomplete': ['bid_axis', 'cid_axis'],

    'Unit_List': ['bid_axis', 'cid_axis'],

    'Category_List': ['cid_axis'],
    'Category_EntryList': [],
    'Category_EntrySummary': ['bid_axis', 'cid_axis'],
    'Category_Field': [],

    'User_Profile': [],
    'User_Field': [],
    'User_Search': ['bid_axis'],

    'Blog_Field': [],
    'Blog_ChildList': [],

    'Tag_Cloud': ['bid_axis'],
    'Tag_Filter': [],

    'Calendar_Month': ['bid_axis', 'cid_axis'],
    'Calendar_Year': ['bid_axis', 'cid_axis'],

    'Links': [],
    'Banner': [],
    'Media_Banner': [],
    'Navigation': [],
    'Topicpath': ['bid_axis', 'cid_axis'],

    'Comment_Body': [],
    'Comment_List': [],

    'Trackback_Body': [],
    'Trackback_List': [],

    'Json_2Tpl': [],
    'Feed_Rss2': ['bid_axis', 'cid_axis'],
    'Feed_ExList': [],
    'Sitemap': ['bid_axis', 'cid_axis'],
    'Ogp': [],

    'Shop_Cart_List': [],
    'Case_Time': [],

    'Alias_List': [],

    'Field_ValueList': ['bid_axis'],

    'Form2_Unit': [],

    'Api_GoogleAnalytics_Ranking': [],
    'Api_Twitter_Statuses_HomeTimeline': [],
    'Api_Twitter_Statuses_UserTimeline': [],
    'Api_Twitter_Search': [],
    'Api_Twitter_List_Statuses': [],
    'Api_Twitter_List_Members': [],

    'Api_Instagram_Users_Media_Recent': [],
    'Api_Instagram_Users_Media_Liked': [],

    'Api_Bing_WebSearch': [],
    'Api_Bing_ImageSearch': [],

    'Plugin_Schedule': [],
    'Schedule': []
  },

  //--------------------
  // multi arg guidance
  multiArgGuidance: {
    'Entry_Body': ['bid', 'uid', 'cid', 'eid'],
    'Entry_List': ['bid', 'uid', 'cid', 'eid'],
    'Entry_Photo': ['bid', 'uid', 'cid', 'eid'],
    'Entry_Headline': ['bid', 'uid', 'cid', 'eid'],
    'Entry_Summary': ['bid', 'uid', 'cid', 'eid'],
    'Entry_ArchiveList': ['bid', 'uid', 'cid', 'eid'],
    'Entry_TagRelational': ['cid'],
    'Entry_Continue': ['bid', 'uid', 'cid', 'eid'],
    'Entry_Field': ['bid', 'uid', 'cid', 'eid'],
    'Entry_Calendar': ['bid', 'uid', 'cid', 'eid'],

    'Entry_GeoList': [],

    'Unit_List': [],

    'Category_List': [],
    'Category_EntryList': [],
    'Category_EntrySummary': [],
    'Category_Field': [],

    'User_Profile': [],
    'User_Field': [],
    'User_Search': [],

    'Blog_Field': [],
    'Blog_ChildList': [],

    'Tag_Cloud': [],
    'Tag_Filter': [],

    'Calendar_Month': [],
    'Calendar_Year': [],

    'Links': [],
    'Banner': [],
    'Media_Banner': [],
    'Navigation': [],
    'Topicpath': [],

    'Comment_Body': [],
    'Comment_List': [],

    'Trackback_Body': [],
    'Trackback_List': [],

    'Json_2Tpl': [],
    'Feed_Rss2': [],
    'Feed_ExList': [],
    'Sitemap': [],
    'Ogp': [],

    'Shop_Cart_List': [],
    'Case_Time': [],

    'Alias_List': [],

    'Field_ValueList': [],

    'Form2_Unit': [],

    'Api_GoogleAnalytics_Ranking': [],
    'Api_Twitter_Statuses_HomeTimeline': [],
    'Api_Twitter_Statuses_UserTimeline': [],
    'Api_Twitter_Search': [],
    'Api_Twitter_List_Statuses': [],
    'Api_Twitter_List_Members': [],

    'Api_Instagram_Users_Media_Recent': [],
    'Api_Instagram_Users_Media_Liked': [],

    'Api_Bing_WebSearch': [],
    'Api_Bing_ImageSearch': [],

    'Plugin_Schedule': [],
    'Schedule': []
  }
};
