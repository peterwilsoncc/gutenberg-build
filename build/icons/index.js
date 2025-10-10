"use strict";
var wp;
(wp ||= {}).icons = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // wordpress-external:@wordpress/element
  var require_element = __commonJS({
    "wordpress-external:@wordpress/element"(exports, module) {
      module.exports = window.wp.element;
    }
  });

  // vendor-external:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "vendor-external:react/jsx-runtime"(exports, module) {
      module.exports = window.ReactJSXRuntime;
    }
  });

  // wordpress-external:@wordpress/primitives
  var require_primitives = __commonJS({
    "wordpress-external:@wordpress/primitives"(exports, module) {
      module.exports = window.wp.primitives;
    }
  });

  // packages/icons/build-module/index.js
  var index_exports = {};
  __export(index_exports, {
    Icon: () => icon_default,
    addCard: () => add_card_default,
    addSubmenu: () => add_submenu_default,
    addTemplate: () => add_template_default,
    alignCenter: () => align_center_default,
    alignJustify: () => align_justify_default,
    alignLeft: () => align_left_default,
    alignNone: () => align_none_default,
    alignRight: () => align_right_default,
    archive: () => archive_default,
    arrowDown: () => arrow_down_default,
    arrowDownRight: () => arrow_down_right_default,
    arrowLeft: () => arrow_left_default,
    arrowRight: () => arrow_right_default,
    arrowUp: () => arrow_up_default,
    arrowUpLeft: () => arrow_up_left_default,
    aspectRatio: () => aspect_ratio_default,
    atSymbol: () => at_symbol_default,
    audio: () => audio_default,
    background: () => background_default,
    backup: () => backup_default,
    bell: () => bell_default,
    bellUnread: () => bell_unread_default,
    blockDefault: () => block_default_default,
    blockMeta: () => block_meta_default,
    blockTable: () => block_table_default,
    border: () => border_default,
    box: () => box_default,
    breadcrumbs: () => breadcrumbs_default,
    brush: () => brush_default,
    bug: () => bug_default,
    button: () => button_default,
    buttons: () => buttons_default,
    calendar: () => calendar_default,
    cancelCircleFilled: () => cancel_circle_filled_default,
    caption: () => caption_default,
    capturePhoto: () => capture_photo_default,
    captureVideo: () => capture_video_default,
    category: () => category_default,
    caution: () => caution_default,
    cautionFilled: () => caution_filled_default,
    chartBar: () => chart_bar_default,
    check: () => check_default,
    chevronDown: () => chevron_down_default,
    chevronDownSmall: () => chevron_down_small_default,
    chevronLeft: () => chevron_left_default,
    chevronLeftSmall: () => chevron_left_small_default,
    chevronRight: () => chevron_right_default,
    chevronRightSmall: () => chevron_right_small_default,
    chevronUp: () => chevron_up_default,
    chevronUpDown: () => chevron_up_down_default,
    classic: () => classic_default,
    close: () => close_default,
    closeSmall: () => close_small_default,
    cloud: () => cloud_default,
    cloudDownload: () => cloud_download_default,
    cloudUpload: () => cloud_upload_default,
    code: () => code_default,
    cog: () => cog_default,
    color: () => color_default,
    column: () => column_default,
    columns: () => columns_default,
    comment: () => comment_default,
    commentAuthorAvatar: () => comment_author_avatar_default,
    commentAuthorName: () => comment_author_name_default,
    commentContent: () => comment_content_default,
    commentEditLink: () => comment_edit_link_default,
    commentReplyLink: () => comment_reply_link_default,
    connection: () => connection_default,
    copy: () => copy_default,
    copySmall: () => copy_small_default,
    cornerAll: () => corner_all_default,
    cornerBottomLeft: () => corner_bottom_left_default,
    cornerBottomRight: () => corner_bottom_right_default,
    cornerTopLeft: () => corner_top_left_default,
    cornerTopRight: () => corner_top_right_default,
    cover: () => cover_default,
    create: () => create_default,
    crop: () => crop_default,
    currencyDollar: () => currency_dollar_default,
    currencyEuro: () => currency_euro_default,
    currencyPound: () => currency_pound_default,
    customLink: () => custom_link_default,
    customPostType: () => custom_post_type_default,
    dashboard: () => dashboard_default,
    desktop: () => desktop_default,
    details: () => details_default,
    download: () => download_default,
    drafts: () => drafts_default,
    dragHandle: () => drag_handle_default,
    drawerLeft: () => drawer_left_default,
    drawerRight: () => drawer_right_default,
    envelope: () => envelope_default,
    error: () => error_default,
    external: () => external_default,
    file: () => file_default,
    filter: () => filter_default,
    flipHorizontal: () => flip_horizontal_default,
    flipVertical: () => flip_vertical_default,
    footer: () => footer_default,
    formatBold: () => format_bold_default,
    formatCapitalize: () => format_capitalize_default,
    formatIndent: () => format_indent_default,
    formatIndentRTL: () => format_indent_rtl_default,
    formatItalic: () => format_italic_default,
    formatListBullets: () => format_list_bullets_default,
    formatListBulletsRTL: () => format_list_bullets_rtl_default,
    formatListNumbered: () => format_list_numbered_default,
    formatListNumberedRTL: () => format_list_numbered_rtl_default,
    formatLowercase: () => format_lowercase_default,
    formatLtr: () => format_ltr_default,
    formatOutdent: () => format_outdent_default,
    formatOutdentRTL: () => format_outdent_rtl_default,
    formatRTL: () => format_rtl_default,
    formatStrikethrough: () => format_strikethrough_default,
    formatUnderline: () => format_underline_default,
    formatUppercase: () => format_uppercase_default,
    fullscreen: () => fullscreen_default,
    funnel: () => funnel_default,
    gallery: () => gallery_default,
    gift: () => gift_default,
    globe: () => globe_default,
    grid: () => grid_default,
    group: () => group_default,
    handle: () => handle_default,
    header: () => header_default,
    heading: () => heading_default,
    headingLevel1: () => heading_level_1_default,
    headingLevel2: () => heading_level_2_default,
    headingLevel3: () => heading_level_3_default,
    headingLevel4: () => heading_level_4_default,
    headingLevel5: () => heading_level_5_default,
    headingLevel6: () => heading_level_6_default,
    help: () => help_default,
    helpFilled: () => help_filled_default,
    home: () => home_default,
    homeButton: () => home_button_default,
    html: () => html_default,
    image: () => image_default,
    inbox: () => inbox_default,
    info: () => info_default,
    insertAfter: () => insert_after_default,
    insertBefore: () => insert_before_default,
    institution: () => institution_default,
    justifyBottom: () => justify_bottom_default,
    justifyCenter: () => justify_center_default,
    justifyCenterVertical: () => justify_center_vertical_default,
    justifyLeft: () => justify_left_default,
    justifyRight: () => justify_right_default,
    justifySpaceBetween: () => justify_space_between_default,
    justifySpaceBetweenVertical: () => justify_space_between_vertical_default,
    justifyStretch: () => justify_stretch_default,
    justifyStretchVertical: () => justify_stretch_vertical_default,
    justifyTop: () => justify_top_default,
    key: () => key_default,
    keyboard: () => keyboard_default,
    keyboardClose: () => keyboard_close_default,
    keyboardReturn: () => keyboard_return_default,
    language: () => language_default,
    layout: () => layout_default,
    levelUp: () => level_up_default,
    lifesaver: () => lifesaver_default,
    lineDashed: () => line_dashed_default,
    lineDotted: () => line_dotted_default,
    lineSolid: () => line_solid_default,
    link: () => link_default,
    linkOff: () => link_off_default,
    list: () => list_default,
    listItem: () => list_item_default,
    listView: () => list_view_default,
    lock: () => lock_default,
    lockOutline: () => lock_outline_default,
    lockSmall: () => lock_small_default,
    login: () => login_default,
    loop: () => loop_default,
    mapMarker: () => map_marker_default,
    media: () => media_default,
    mediaAndText: () => media_and_text_default,
    megaphone: () => megaphone_default,
    menu: () => menu_default,
    mobile: () => mobile_default,
    more: () => more_default,
    moreHorizontal: () => more_horizontal_default,
    moreVertical: () => more_vertical_default,
    moveTo: () => move_to_default,
    navigation: () => navigation_default,
    next: () => next_default,
    notAllowed: () => not_allowed_default,
    notFound: () => not_found_default,
    offline: () => offline_default,
    overlayText: () => overlay_text_default,
    page: () => page_default,
    pageBreak: () => page_break_default,
    pages: () => pages_default,
    paragraph: () => paragraph_default,
    payment: () => payment_default,
    pencil: () => pencil_default,
    pending: () => pending_default,
    people: () => people_default,
    percent: () => percent_default,
    pin: () => pin_default,
    pinSmall: () => pin_small_default,
    plugins: () => plugins_default,
    plus: () => plus_default,
    plusCircle: () => plus_circle_default,
    plusCircleFilled: () => plus_circle_filled_default,
    positionCenter: () => position_center_default,
    positionLeft: () => position_left_default,
    positionRight: () => position_right_default,
    post: () => post_default,
    postAuthor: () => post_author_default,
    postCategories: () => post_categories_default,
    postComments: () => post_comments_default,
    postCommentsCount: () => post_comments_count_default,
    postCommentsForm: () => post_comments_form_default,
    postContent: () => post_content_default,
    postDate: () => post_date_default,
    postExcerpt: () => post_excerpt_default,
    postFeaturedImage: () => post_featured_image_default,
    postList: () => post_list_default,
    postTerms: () => post_terms_default,
    preformatted: () => preformatted_default,
    previous: () => previous_default,
    published: () => published_default,
    pullLeft: () => pull_left_default,
    pullRight: () => pull_right_default,
    pullquote: () => pullquote_default,
    queryPagination: () => query_pagination_default,
    queryPaginationNext: () => query_pagination_next_default,
    queryPaginationNumbers: () => query_pagination_numbers_default,
    queryPaginationPrevious: () => query_pagination_previous_default,
    quote: () => quote_default,
    receipt: () => receipt_default,
    redo: () => redo_default,
    removeBug: () => remove_bug_default,
    removeSubmenu: () => remove_submenu_default,
    replace: () => replace_default,
    reset: () => reset_default,
    resizeCornerNE: () => resize_corner_n_e_default,
    reusableBlock: () => reusable_block_default,
    rotateLeft: () => rotate_left_default,
    rotateRight: () => rotate_right_default,
    row: () => row_default,
    rss: () => rss_default,
    scheduled: () => scheduled_default,
    search: () => search_default,
    seen: () => seen_default,
    send: () => send_default,
    separator: () => separator_default,
    settings: () => settings_default,
    shadow: () => shadow_default,
    share: () => share_default,
    shield: () => shield_default,
    shipping: () => shipping_default,
    shortcode: () => shortcode_default,
    shuffle: () => shuffle_default,
    sidebar: () => sidebar_default,
    sidesAll: () => sides_all_default,
    sidesAxial: () => sides_axial_default,
    sidesBottom: () => sides_bottom_default,
    sidesHorizontal: () => sides_horizontal_default,
    sidesLeft: () => sides_left_default,
    sidesRight: () => sides_right_default,
    sidesTop: () => sides_top_default,
    sidesVertical: () => sides_vertical_default,
    siteLogo: () => site_logo_default,
    square: () => square_default,
    stack: () => stack_default,
    starEmpty: () => star_empty_default,
    starFilled: () => star_filled_default,
    starHalf: () => star_half_default,
    store: () => store_default,
    stretchFullWidth: () => stretch_full_width_default,
    stretchWide: () => stretch_wide_default,
    styles: () => styles_default,
    subscript: () => subscript_default,
    superscript: () => superscript_default,
    swatch: () => swatch_default,
    symbol: () => symbol_default,
    symbolFilled: () => symbol_filled_default,
    table: () => table_default,
    tableColumnAfter: () => table_column_after_default,
    tableColumnBefore: () => table_column_before_default,
    tableColumnDelete: () => table_column_delete_default,
    tableOfContents: () => table_of_contents_default,
    tableRowAfter: () => table_row_after_default,
    tableRowBefore: () => table_row_before_default,
    tableRowDelete: () => table_row_delete_default,
    tablet: () => tablet_default,
    tag: () => tag_default,
    termDescription: () => term_description_default,
    termName: () => term_name_default,
    textColor: () => text_color_default,
    textHorizontal: () => text_horizontal_default,
    textVertical: () => text_vertical_default,
    thumbsDown: () => thumbs_down_default,
    thumbsUp: () => thumbs_up_default,
    tip: () => tip_default,
    title: () => title_default,
    tool: () => tool_default,
    trash: () => trash_default,
    trendingDown: () => trending_down_default,
    trendingUp: () => trending_up_default,
    typography: () => typography_default,
    undo: () => undo_default,
    ungroup: () => ungroup_default,
    unlock: () => unlock_default,
    unseen: () => unseen_default,
    update: () => update_default,
    upload: () => upload_default,
    verse: () => verse_default,
    video: () => video_default,
    widget: () => widget_default,
    wordpress: () => wordpress_default
  });

  // packages/icons/build-module/icon/index.js
  var import_element = __toESM(require_element());
  var icon_default = (0, import_element.forwardRef)(
    ({ icon, size = 24, ...props }, ref) => {
      return (0, import_element.cloneElement)(icon, {
        width: size,
        height: size,
        ...props,
        ref
      });
    }
  );

  // packages/icons/build-module/library/add-card.js
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var import_primitives = __toESM(require_primitives());
  var add_card_default = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_primitives.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_primitives.Path, { d: "M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z" }) });

  // packages/icons/build-module/library/add-submenu.js
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  var import_primitives2 = __toESM(require_primitives());
  var add_submenu_default = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_primitives2.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_primitives2.Path, { d: "M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z" }) });

  // packages/icons/build-module/library/add-template.js
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
  var import_primitives3 = __toESM(require_primitives());
  var add_template_default = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_primitives3.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_primitives3.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM13.9624 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.0391H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H10L10 10.4917L16.4589 10.5139L16.4641 9.01389L5.5 8.97618V6C5.5 5.72386 5.72386 5.5 6 5.5H13.9624V4ZM5.5 10.4762V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.4865L5.5 10.4762Z"
    }
  ) });

  // packages/icons/build-module/library/align-center.js
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  var import_primitives4 = __toESM(require_primitives());
  var align_center_default = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_primitives4.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_primitives4.Path, { d: "M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z" }) });

  // packages/icons/build-module/library/align-justify.js
  var import_jsx_runtime5 = __toESM(require_jsx_runtime());
  var import_primitives5 = __toESM(require_primitives());
  var align_justify_default = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_primitives5.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_primitives5.Path, { d: "M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z" }) });

  // packages/icons/build-module/library/align-left.js
  var import_jsx_runtime6 = __toESM(require_jsx_runtime());
  var import_primitives6 = __toESM(require_primitives());
  var align_left_default = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_primitives6.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_primitives6.Path, { d: "M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z" }) });

  // packages/icons/build-module/library/align-none.js
  var import_jsx_runtime7 = __toESM(require_jsx_runtime());
  var import_primitives7 = __toESM(require_primitives());
  var align_none_default = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_primitives7.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_primitives7.Path, { d: "M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z" }) });

  // packages/icons/build-module/library/align-right.js
  var import_jsx_runtime8 = __toESM(require_jsx_runtime());
  var import_primitives8 = __toESM(require_primitives());
  var align_right_default = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives8.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives8.Path, { d: "M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z" }) });

  // packages/icons/build-module/library/archive.js
  var import_jsx_runtime9 = __toESM(require_jsx_runtime());
  var import_primitives9 = __toESM(require_primitives());
  var archive_default = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_primitives9.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_primitives9.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.934 7.406a1 1 0 0 0 .914.594H19a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h5.764a.5.5 0 0 1 .447.276l.723 1.63Zm1.064-1.216a.5.5 0 0 0 .462.31H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.764a2 2 0 0 1 1.789 1.106l.445 1.084ZM8.5 10.5h7V12h-7v-1.5Zm7 3.5h-7v1.5h7V14Z"
    }
  ) });

  // packages/icons/build-module/library/arrow-down-right.js
  var import_jsx_runtime10 = __toESM(require_jsx_runtime());
  var import_primitives10 = __toESM(require_primitives());
  var arrow_down_right_default = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_primitives10.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_primitives10.Path, { d: "M10 18h8v-8h-1.5v5.5L7 6 6 7l9.5 9.5H10V18Z" }) });

  // packages/icons/build-module/library/arrow-down.js
  var import_jsx_runtime11 = __toESM(require_jsx_runtime());
  var import_primitives11 = __toESM(require_primitives());
  var arrow_down_default = /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_primitives11.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_primitives11.Path, { d: "m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z" }) });

  // packages/icons/build-module/library/arrow-left.js
  var import_jsx_runtime12 = __toESM(require_jsx_runtime());
  var import_primitives12 = __toESM(require_primitives());
  var arrow_left_default = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_primitives12.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_primitives12.Path, { d: "M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z" }) });

  // packages/icons/build-module/library/arrow-right.js
  var import_jsx_runtime13 = __toESM(require_jsx_runtime());
  var import_primitives13 = __toESM(require_primitives());
  var arrow_right_default = /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_primitives13.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_primitives13.Path, { d: "m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z" }) });

  // packages/icons/build-module/library/arrow-up-left.js
  var import_jsx_runtime14 = __toESM(require_jsx_runtime());
  var import_primitives14 = __toESM(require_primitives());
  var arrow_up_left_default = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_primitives14.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_primitives14.Path, { d: "M14 6H6v8h1.5V8.5L17 18l1-1-9.5-9.5H14V6Z" }) });

  // packages/icons/build-module/library/arrow-up.js
  var import_jsx_runtime15 = __toESM(require_jsx_runtime());
  var import_primitives15 = __toESM(require_primitives());
  var arrow_up_default = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_primitives15.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_primitives15.Path, { d: "M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z" }) });

  // packages/icons/build-module/library/aspect-ratio.js
  var import_jsx_runtime16 = __toESM(require_jsx_runtime());
  var import_primitives16 = __toESM(require_primitives());
  var aspect_ratio_default = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives16.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_primitives16.Path, { d: "M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z" }) });

  // packages/icons/build-module/library/at-symbol.js
  var import_jsx_runtime17 = __toESM(require_jsx_runtime());
  var import_primitives17 = __toESM(require_primitives());
  var at_symbol_default = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives17.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_primitives17.Path, { d: "M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z" }) });

  // packages/icons/build-module/library/audio.js
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  var import_primitives18 = __toESM(require_primitives());
  var audio_default = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives18.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_primitives18.Path, { d: "M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z" }) });

  // packages/icons/build-module/library/background.js
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var import_primitives19 = __toESM(require_primitives());
  var background_default = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_primitives19.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_primitives19.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.53 4.47a.75.75 0 1 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm5 1a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Zm-11.06 10a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Zm.06-5a.75.75 0 0 0-1.06 1.06l8 8a.75.75 0 1 0 1.06-1.06l-8-8Zm-.06-3a.75.75 0 0 1 1.06 0l10 10a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06Zm3.06-2a.75.75 0 0 0-1.06 1.06l10 10a.75.75 0 1 0 1.06-1.06l-10-10Z"
    }
  ) });

  // packages/icons/build-module/library/backup.js
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  var import_primitives20 = __toESM(require_primitives());
  var backup_default = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives20.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_primitives20.Path, { d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z" }) });

  // packages/icons/build-module/library/bell-unread.js
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var import_primitives21 = __toESM(require_primitives());
  var bell_unread_default = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_primitives21.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_primitives21.Path, { d: "M13.969 4.39A5.088 5.088 0 0 0 12 4C9.2 4 7 6.2 7 9v2.5c0 1.353-.17 2.368-.976 3-.267.209-.602.376-1.024.5v1h14v-1c-.422-.124-.757-.291-1.024-.5-.806-.632-.976-1.647-.976-3V11c-.53 0-1.037-.103-1.5-.29v.79c0 .93.066 1.98.515 2.897l.053.103H7.932l.053-.103c.449-.917.515-1.967.515-2.897V9c0-1.972 1.528-3.5 3.5-3.5.43 0 .838.072 1.214.206.167-.488.425-.933.755-1.316Zm-3.961 13.618c0-.176.023-.346.065-.508h3.854A1.996 1.996 0 0 1 12 20a1.991 1.991 0 0 1-1.992-1.992Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_primitives21.Circle, { cx: "17", cy: "7", r: "2.5" })
  ] });

  // packages/icons/build-module/library/bell.js
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  var import_primitives22 = __toESM(require_primitives());
  var bell_default = /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_primitives22.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_primitives22.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17 11.5c0 1.353.17 2.368.976 3 .266.209.602.376 1.024.5v1H5v-1c.422-.124.757-.291 1.024-.5.806-.632.976-1.647.976-3V9c0-2.8 2.2-5 5-5s5 2.2 5 5v2.5ZM15.5 9v2.5c0 .93.066 1.98.515 2.897l.053.103H7.932a4.018 4.018 0 0 0 .053-.103c.449-.917.515-1.967.515-2.897V9c0-1.972 1.528-3.5 3.5-3.5s3.5 1.528 3.5 3.5Zm-5.492 9.008c0-.176.023-.346.065-.508h3.854A1.996 1.996 0 0 1 12 20c-1.1 0-1.992-.892-1.992-1.992Z"
    }
  ) });

  // packages/icons/build-module/library/block-default.js
  var import_jsx_runtime23 = __toESM(require_jsx_runtime());
  var import_primitives23 = __toESM(require_primitives());
  var block_default_default = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_primitives23.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_primitives23.Path, { d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z" }) });

  // packages/icons/build-module/library/block-meta.js
  var import_jsx_runtime24 = __toESM(require_jsx_runtime());
  var import_primitives24 = __toESM(require_primitives());
  var block_meta_default = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_primitives24.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    import_primitives24.Path,
    {
      fillRule: "evenodd",
      d: "M8.95 11.25H4v1.5h4.95v4.5H13V18c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v.75h-2.55v-7.5H13V9c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v.75H8.95v4.5ZM14.5 15v3c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5Zm0-6V6c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5Z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/block-table.js
  var import_jsx_runtime25 = __toESM(require_jsx_runtime());
  var import_primitives25 = __toESM(require_primitives());
  var block_table_default = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_primitives25.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_primitives25.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z" }) });

  // packages/icons/build-module/library/border.js
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  var import_primitives26 = __toESM(require_primitives());
  var border_default = /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_primitives26.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_primitives26.Path, { d: "m6.6 15.6-1.2.8c.6.9 1.3 1.6 2.2 2.2l.8-1.2c-.7-.5-1.3-1.1-1.8-1.8zM5.5 12c0-.4 0-.9.1-1.3l-1.5-.3c0 .5-.1 1.1-.1 1.6s.1 1.1.2 1.6l1.5-.3c-.2-.4-.2-.9-.2-1.3zm11.9-3.6 1.2-.8c-.6-.9-1.3-1.6-2.2-2.2l-.8 1.2c.7.5 1.3 1.1 1.8 1.8zM5.3 7.6l1.2.8c.5-.7 1.1-1.3 1.8-1.8l-.7-1.3c-.9.6-1.7 1.4-2.3 2.3zm14.5 2.8-1.5.3c.1.4.1.8.1 1.3s0 .9-.1 1.3l1.5.3c.1-.5.2-1 .2-1.6s-.1-1.1-.2-1.6zM12 18.5c-.4 0-.9 0-1.3-.1l-.3 1.5c.5.1 1 .2 1.6.2s1.1-.1 1.6-.2l-.3-1.5c-.4.1-.9.1-1.3.1zm3.6-1.1.8 1.2c.9-.6 1.6-1.3 2.2-2.2l-1.2-.8c-.5.7-1.1 1.3-1.8 1.8zM10.4 4.2l.3 1.5c.4-.1.8-.1 1.3-.1s.9 0 1.3.1l.3-1.5c-.5-.1-1.1-.2-1.6-.2s-1.1.1-1.6.2z" }) });

  // packages/icons/build-module/library/box.js
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  var import_primitives27 = __toESM(require_primitives());
  var box_default = /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_primitives27.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    import_primitives27.Path,
    {
      fillRule: "evenodd",
      d: "M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/breadcrumbs.js
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());
  var import_primitives28 = __toESM(require_primitives());
  var breadcrumbs_default = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_primitives28.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_primitives28.Path, { d: "M4 13.5h3v-3H4v3Zm6-3.5 2 2-2 2 1 1 3-3-3-3-1 1Zm7 .5v3h3v-3h-3Z" }) });

  // packages/icons/build-module/library/brush.js
  var import_jsx_runtime29 = __toESM(require_jsx_runtime());
  var import_primitives29 = __toESM(require_primitives());
  var brush_default = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_primitives29.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_primitives29.Path, { d: "M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z" }) });

  // packages/icons/build-module/library/bug.js
  var import_jsx_runtime30 = __toESM(require_jsx_runtime());
  var import_primitives30 = __toESM(require_primitives());
  var bug_default = /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_primitives30.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    import_primitives30.Path,
    {
      d: "M6.13 5.5l1.926 1.927A4.975 4.975 0 007.025 10H5v1.5h2V13H5v1.5h2.1a5.002 5.002 0 009.8 0H19V13h-2v-1.5h2V10h-2.025a4.979 4.979 0 00-1.167-2.74l1.76-1.76-1.061-1.06-1.834 1.834A4.977 4.977 0 0012 5.5c-1.062 0-2.046.33-2.855.895L7.19 4.44 6.13 5.5zm2.37 5v3a3.5 3.5 0 107 0v-3a3.5 3.5 0 10-7 0z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/button.js
  var import_jsx_runtime31 = __toESM(require_jsx_runtime());
  var import_primitives31 = __toESM(require_primitives());
  var button_default = /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_primitives31.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_primitives31.Path, { d: "M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z" }) });

  // packages/icons/build-module/library/buttons.js
  var import_jsx_runtime32 = __toESM(require_jsx_runtime());
  var import_primitives32 = __toESM(require_primitives());
  var buttons_default = /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_primitives32.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_primitives32.Path, { d: "M14.5 17.5H9.5V16H14.5V17.5Z M14.5 8H9.5V6.5H14.5V8Z M7 3.5H17C18.1046 3.5 19 4.39543 19 5.5V9C19 10.1046 18.1046 11 17 11H7C5.89543 11 5 10.1046 5 9V5.5C5 4.39543 5.89543 3.5 7 3.5ZM17 5H7C6.72386 5 6.5 5.22386 6.5 5.5V9C6.5 9.27614 6.72386 9.5 7 9.5H17C17.2761 9.5 17.5 9.27614 17.5 9V5.5C17.5 5.22386 17.2761 5 17 5Z M7 13H17C18.1046 13 19 13.8954 19 15V18.5C19 19.6046 18.1046 20.5 17 20.5H7C5.89543 20.5 5 19.6046 5 18.5V15C5 13.8954 5.89543 13 7 13ZM17 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V18.5C6.5 18.7761 6.72386 19 7 19H17C17.2761 19 17.5 18.7761 17.5 18.5V15C17.5 14.7239 17.2761 14.5 17 14.5Z" }) });

  // packages/icons/build-module/library/calendar.js
  var import_jsx_runtime33 = __toESM(require_jsx_runtime());
  var import_primitives33 = __toESM(require_primitives());
  var calendar_default = /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_primitives33.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_primitives33.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z" }) });

  // packages/icons/build-module/library/cancel-circle-filled.js
  var import_jsx_runtime34 = __toESM(require_jsx_runtime());
  var import_primitives34 = __toESM(require_primitives());
  var cancel_circle_filled_default = /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_primitives34.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_primitives34.Path, { d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.8 10.7-1.1 1.1-2.7-2.7-2.7 2.7-1.1-1.1 2.7-2.7-2.7-2.7 1.1-1.1 2.7 2.7 2.7-2.7 1.1 1.1-2.7 2.7 2.7 2.7Z" }) });

  // packages/icons/build-module/library/caption.js
  var import_jsx_runtime35 = __toESM(require_jsx_runtime());
  var import_primitives35 = __toESM(require_primitives());
  var caption_default = /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_primitives35.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_primitives35.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"
    }
  ) });

  // packages/icons/build-module/library/capture-photo.js
  var import_jsx_runtime36 = __toESM(require_jsx_runtime());
  var import_primitives36 = __toESM(require_primitives());
  var capture_photo_default = /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_primitives36.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_primitives36.Path, { d: "M12 9.2c-2.2 0-3.9 1.8-3.9 4s1.8 4 3.9 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM20.2 8c-.1 0-.3 0-.5-.1l-2.5-.8c-.4-.1-.8-.4-1.1-.8l-1-1.5c-.4-.5-1-.9-1.7-.9h-2.9c-.6.1-1.2.4-1.6 1l-1 1.5c-.3.3-.6.6-1.1.7l-2.5.8c-.2.1-.4.1-.6.1-1 .2-1.7.9-1.7 1.9v8.3c0 1 .9 1.9 2 1.9h16c1.1 0 2-.8 2-1.9V9.9c0-1-.7-1.7-1.8-1.9zm.3 10.1c0 .2-.2.4-.5.4H4c-.3 0-.5-.2-.5-.4V9.9c0-.1.2-.3.5-.4.2 0 .5-.1.8-.2l2.5-.8c.7-.2 1.4-.6 1.8-1.3l1-1.5c.1-.1.2-.2.4-.2h2.9c.2 0 .3.1.4.2l1 1.5c.4.7 1.1 1.1 1.9 1.4l2.5.8c.3.1.6.1.8.2.3 0 .4.2.4.4v8.1z" }) });

  // packages/icons/build-module/library/capture-video.js
  var import_jsx_runtime37 = __toESM(require_jsx_runtime());
  var import_primitives37 = __toESM(require_primitives());
  var capture_video_default = /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_primitives37.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_primitives37.Path, { d: "M14 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v10zm2.5-7v4l5 3V7l-5 3zm3.5 4.4l-2-1.2v-2.3l2-1.2v4.7z" }) });

  // packages/icons/build-module/library/category.js
  var import_jsx_runtime38 = __toESM(require_jsx_runtime());
  var import_primitives38 = __toESM(require_primitives());
  var category_default = /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_primitives38.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_primitives38.Path,
    {
      d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/caution-filled.js
  var import_jsx_runtime39 = __toESM(require_jsx_runtime());
  var import_primitives39 = __toESM(require_primitives());
  var caution_filled_default = /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_primitives39.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_primitives39.Path, { d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.75 8V13H11.25V8H12.75ZM12.75 14.5V16H11.25V14.5H12.75Z" }) });

  // packages/icons/build-module/library/caution.js
  var import_jsx_runtime40 = __toESM(require_jsx_runtime());
  var import_primitives40 = __toESM(require_primitives());
  var caution_default = /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_primitives40.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    import_primitives40.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.75 12v-1.5h1.5V16h-1.5Zm0-8v5h1.5V8h-1.5Z"
    }
  ) });

  // packages/icons/build-module/library/chart-bar.js
  var import_jsx_runtime41 = __toESM(require_jsx_runtime());
  var import_primitives41 = __toESM(require_primitives());
  var chart_bar_default = /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_primitives41.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_primitives41.Path,
    {
      fillRule: "evenodd",
      d: "M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/check.js
  var import_jsx_runtime42 = __toESM(require_jsx_runtime());
  var import_primitives42 = __toESM(require_primitives());
  var check_default = /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_primitives42.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_primitives42.Path, { d: "M16.5 7.5 10 13.9l-2.5-2.4-1 1 3.5 3.6 7.5-7.6z" }) });

  // packages/icons/build-module/library/chevron-down-small.js
  var import_jsx_runtime43 = __toESM(require_jsx_runtime());
  var import_primitives43 = __toESM(require_primitives());
  var chevron_down_small_default = /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_primitives43.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_primitives43.Path, { d: "m15.99 10.889-3.988 3.418-3.988-3.418.976-1.14 3.012 2.582 3.012-2.581.976 1.139Z" }) });

  // packages/icons/build-module/library/chevron-down.js
  var import_jsx_runtime44 = __toESM(require_jsx_runtime());
  var import_primitives44 = __toESM(require_primitives());
  var chevron_down_default = /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_primitives44.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_primitives44.Path, { d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" }) });

  // packages/icons/build-module/library/chevron-left-small.js
  var import_jsx_runtime45 = __toESM(require_jsx_runtime());
  var import_primitives45 = __toESM(require_primitives());
  var chevron_left_small_default = /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_primitives45.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_primitives45.Path, { d: "m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z" }) });

  // packages/icons/build-module/library/chevron-left.js
  var import_jsx_runtime46 = __toESM(require_jsx_runtime());
  var import_primitives46 = __toESM(require_primitives());
  var chevron_left_default = /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_primitives46.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_primitives46.Path, { d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z" }) });

  // packages/icons/build-module/library/chevron-right-small.js
  var import_jsx_runtime47 = __toESM(require_jsx_runtime());
  var import_primitives47 = __toESM(require_primitives());
  var chevron_right_small_default = /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_primitives47.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_primitives47.Path, { d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z" }) });

  // packages/icons/build-module/library/chevron-right.js
  var import_jsx_runtime48 = __toESM(require_jsx_runtime());
  var import_primitives48 = __toESM(require_primitives());
  var chevron_right_default = /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_primitives48.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_primitives48.Path, { d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z" }) });

  // packages/icons/build-module/library/chevron-up-down.js
  var import_jsx_runtime49 = __toESM(require_jsx_runtime());
  var import_primitives49 = __toESM(require_primitives());
  var chevron_up_down_default = /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_primitives49.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_primitives49.Path, { d: "m12 20-4.5-3.6-.9 1.2L12 22l5.5-4.4-.9-1.2L12 20zm0-16 4.5 3.6.9-1.2L12 2 6.5 6.4l.9 1.2L12 4z" }) });

  // packages/icons/build-module/library/chevron-up.js
  var import_jsx_runtime50 = __toESM(require_jsx_runtime());
  var import_primitives50 = __toESM(require_primitives());
  var chevron_up_default = /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_primitives50.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_primitives50.Path, { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" }) });

  // packages/icons/build-module/library/classic.js
  var import_jsx_runtime51 = __toESM(require_jsx_runtime());
  var import_primitives51 = __toESM(require_primitives());
  var classic_default = /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_primitives51.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_primitives51.Path, { d: "M20 6H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h16c.3 0 .5.2.5.5v9zM10 10H8v2h2v-2zm-5 2h2v-2H5v2zm8-2h-2v2h2v-2zm-5 6h8v-2H8v2zm6-4h2v-2h-2v2zm3 0h2v-2h-2v2zm0 4h2v-2h-2v2zM5 16h2v-2H5v2z" }) });

  // packages/icons/build-module/library/close-small.js
  var import_jsx_runtime52 = __toESM(require_jsx_runtime());
  var import_primitives52 = __toESM(require_primitives());
  var close_small_default = /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_primitives52.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_primitives52.Path, { d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z" }) });

  // packages/icons/build-module/library/close.js
  var import_jsx_runtime53 = __toESM(require_jsx_runtime());
  var import_primitives53 = __toESM(require_primitives());
  var close_default = /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_primitives53.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_primitives53.Path, { d: "m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" }) });

  // packages/icons/build-module/library/cloud-download.js
  var import_jsx_runtime54 = __toESM(require_jsx_runtime());
  var import_primitives54 = __toESM(require_primitives());
  var cloud_download_default = /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_primitives54.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_primitives54.Path, { d: "M17.3 10.1002C17.3 7.6002 15.2 5.7002 12.5 5.7002C10.3 5.7002 8.4 7.1002 7.9 9.0002H7.7C5.7 9.0002 4 10.7002 4 12.8002C4 14.9002 5.7 16.6002 7.7 16.6002V15.2002C6.5 15.2002 5.5 14.1002 5.5 12.9002C5.5 11.7002 6.5 10.5002 7.7 10.5002H9L9.3 9.4002C9.7 8.1002 11 7.2002 12.5 7.2002C14.3 7.2002 15.8 8.5002 15.8 10.1002V11.4002L17.1 11.6002C17.9 11.7002 18.5 12.5002 18.5 13.4002C18.5 14.4002 17.7 15.2002 16.8 15.2002H16.5V16.6002H16.7C18.5 16.6002 19.9 15.1002 19.9 13.3002C20 11.7002 18.8 10.4002 17.3 10.1002Z M9.8806 13.7576L8.81995 14.8182L12.0019 18.0002L15.1851 14.8171L14.1244 13.7564L12.7551 15.1257L12.7551 10.0002L11.2551 10.0002V15.1321L9.8806 13.7576Z" }) });

  // packages/icons/build-module/library/cloud-upload.js
  var import_jsx_runtime55 = __toESM(require_jsx_runtime());
  var import_primitives55 = __toESM(require_primitives());
  var cloud_upload_default = /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_primitives55.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_primitives55.Path, { d: "M17.3 10.1C17.3 7.60001 15.2 5.70001 12.5 5.70001C10.3 5.70001 8.4 7.10001 7.9 9.00001H7.7C5.7 9.00001 4 10.7 4 12.8C4 14.9 5.7 16.6 7.7 16.6H9.5V15.2H7.7C6.5 15.2 5.5 14.1 5.5 12.9C5.5 11.7 6.5 10.5 7.7 10.5H9L9.3 9.40001C9.7 8.10001 11 7.20001 12.5 7.20001C14.3 7.20001 15.8 8.50001 15.8 10.1V11.4L17.1 11.6C17.9 11.7 18.5 12.5 18.5 13.4C18.5 14.4 17.7 15.2 16.8 15.2H14.5V16.6H16.7C18.5 16.6 19.9 15.1 19.9 13.3C20 11.7 18.8 10.4 17.3 10.1Z M14.1245 14.2426L15.1852 13.182L12.0032 10L8.82007 13.1831L9.88072 14.2438L11.25 12.8745V18H12.75V12.8681L14.1245 14.2426Z" }) });

  // packages/icons/build-module/library/cloud.js
  var import_jsx_runtime56 = __toESM(require_jsx_runtime());
  var import_primitives56 = __toESM(require_primitives());
  var cloud_default = /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_primitives56.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_primitives56.Path, { d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z" }) });

  // packages/icons/build-module/library/code.js
  var import_jsx_runtime57 = __toESM(require_jsx_runtime());
  var import_primitives57 = __toESM(require_primitives());
  var code_default = /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_primitives57.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_primitives57.Path, { d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z" }) });

  // packages/icons/build-module/library/cog.js
  var import_jsx_runtime58 = __toESM(require_jsx_runtime());
  var import_primitives58 = __toESM(require_primitives());
  var cog_default = /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_primitives58.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    import_primitives58.Path,
    {
      fillRule: "evenodd",
      d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/color.js
  var import_jsx_runtime59 = __toESM(require_jsx_runtime());
  var import_primitives59 = __toESM(require_primitives());
  var color_default = /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_primitives59.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_primitives59.Path, { d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z" }) });

  // packages/icons/build-module/library/column.js
  var import_jsx_runtime60 = __toESM(require_jsx_runtime());
  var import_primitives60 = __toESM(require_primitives());
  var column_default = /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_primitives60.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_primitives60.Path, { d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z" }) });

  // packages/icons/build-module/library/columns.js
  var import_jsx_runtime61 = __toESM(require_jsx_runtime());
  var import_primitives61 = __toESM(require_primitives());
  var columns_default = /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_primitives61.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    import_primitives61.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
    }
  ) });

  // packages/icons/build-module/library/comment-author-avatar.js
  var import_jsx_runtime62 = __toESM(require_jsx_runtime());
  var import_primitives62 = __toESM(require_primitives());
  var comment_author_avatar_default = /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_primitives62.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    import_primitives62.Path,
    {
      fillRule: "evenodd",
      d: "M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/comment-author-name.js
  var import_jsx_runtime63 = __toESM(require_jsx_runtime());
  var import_primitives63 = __toESM(require_primitives());
  var comment_author_name_default = /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_primitives63.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      import_primitives63.Path,
      {
        d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      import_primitives63.Path,
      {
        d: "M15 15V15C15 13.8954 14.1046 13 13 13L11 13C9.89543 13 9 13.8954 9 15V15",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_primitives63.Circle, { cx: "12", cy: "9", r: "2", fillRule: "evenodd", clipRule: "evenodd" })
  ] });

  // packages/icons/build-module/library/comment-content.js
  var import_jsx_runtime64 = __toESM(require_jsx_runtime());
  var import_primitives64 = __toESM(require_primitives());
  var comment_content_default = /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_primitives64.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    import_primitives64.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.68822 16.625L5.5 17.8145L5.5 5.5L18.5 5.5L18.5 16.625L6.68822 16.625ZM7.31 18.125L19 18.125C19.5523 18.125 20 17.6773 20 17.125L20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19.5247C4 19.8173 4.16123 20.086 4.41935 20.2237C4.72711 20.3878 5.10601 20.3313 5.35252 20.0845L7.31 18.125ZM16 9.99997H8V8.49997H16V9.99997ZM8 14H13V12.5H8V14Z"
    }
  ) });

  // packages/icons/build-module/library/comment-edit-link.js
  var import_jsx_runtime65 = __toESM(require_jsx_runtime());
  var import_primitives65 = __toESM(require_primitives());
  var comment_edit_link_default = /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_primitives65.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_primitives65.Path, { d: "m6.249 11.065.44-.44h3.186l-1.5 1.5H7.31l-1.957 1.96A.792.792 0 0 1 4 13.524V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.5L12.5 8V5.5h-7v6.315l.749-.75ZM20 19.75H7v-1.5h13v1.5Zm0-12.653-8.967 9.064L8 17l.867-2.935L17.833 5 20 7.097Z" }) });

  // packages/icons/build-module/library/comment-reply-link.js
  var import_jsx_runtime66 = __toESM(require_jsx_runtime());
  var import_primitives66 = __toESM(require_primitives());
  var comment_reply_link_default = /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_primitives66.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_primitives66.Path, { d: "M6.68822 10.625L6.24878 11.0649L5.5 11.8145L5.5 5.5L12.5 5.5V8L14 6.5V5C14 4.44772 13.5523 4 13 4H5C4.44772 4 4 4.44771 4 5V13.5247C4 13.8173 4.16123 14.086 4.41935 14.2237C4.72711 14.3878 5.10601 14.3313 5.35252 14.0845L7.31 12.125H8.375L9.875 10.625H7.31H6.68822ZM14.5605 10.4983L11.6701 13.75H16.9975C17.9963 13.75 18.7796 14.1104 19.3553 14.7048C19.9095 15.2771 20.2299 16.0224 20.4224 16.7443C20.7645 18.0276 20.7543 19.4618 20.7487 20.2544C20.7481 20.345 20.7475 20.4272 20.7475 20.4999L19.2475 20.5001C19.2475 20.4191 19.248 20.3319 19.2484 20.2394V20.2394C19.2526 19.4274 19.259 18.2035 18.973 17.1307C18.8156 16.5401 18.586 16.0666 18.2778 15.7483C17.9909 15.4521 17.5991 15.25 16.9975 15.25H11.8106L14.5303 17.9697L13.4696 19.0303L8.96956 14.5303L13.4394 9.50171L14.5605 10.4983Z" }) });

  // packages/icons/build-module/library/comment.js
  var import_jsx_runtime67 = __toESM(require_jsx_runtime());
  var import_primitives67 = __toESM(require_primitives());
  var comment_default = /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_primitives67.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_primitives67.Path, { d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z" }) });

  // packages/icons/build-module/library/connection.js
  var import_jsx_runtime68 = __toESM(require_jsx_runtime());
  var import_primitives68 = __toESM(require_primitives());
  var connection_default = /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_primitives68.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_primitives68.Path, { d: "M19.53 4.47a.75.75 0 0 1 0 1.06L17.06 8l.77.769a3.155 3.155 0 0 1 .685 3.439 3.15 3.15 0 0 1-.685 1.022v.001L13.23 17.83v.001a3.15 3.15 0 0 1-4.462 0L8 17.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 16l-.77-.769a3.154 3.154 0 0 1-.685-3.439 3.15 3.15 0 0 1 .685-1.023l4.599-4.598a3.152 3.152 0 0 1 4.462 0l.769.768 2.47-2.47a.75.75 0 0 1 1.06 0Zm-2.76 7.7L15 13.94 10.06 9l1.771-1.77a1.65 1.65 0 0 1 2.338 0L16.77 9.83a1.649 1.649 0 0 1 0 2.338h-.001ZM13.94 15 9 10.06l-1.77 1.771a1.65 1.65 0 0 0 0 2.338l2.601 2.602a1.649 1.649 0 0 0 2.338 0v-.001L13.94 15Z" }) });

  // packages/icons/build-module/library/copy-small.js
  var import_jsx_runtime69 = __toESM(require_jsx_runtime());
  var import_primitives69 = __toESM(require_primitives());
  var copy_small_default = /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_primitives69.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_primitives69.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"
    }
  ) });

  // packages/icons/build-module/library/copy.js
  var import_jsx_runtime70 = __toESM(require_jsx_runtime());
  var import_primitives70 = __toESM(require_primitives());
  var copy_default = /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_primitives70.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    import_primitives70.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 4.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5ZM3 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm17 3v10.75c0 .69-.56 1.25-1.25 1.25H6v1.5h12.75a2.75 2.75 0 0 0 2.75-2.75V8H20Z"
    }
  ) });

  // packages/icons/build-module/library/corner-all.js
  var import_jsx_runtime71 = __toESM(require_jsx_runtime());
  var import_primitives71 = __toESM(require_primitives());
  var corner_all_default = /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_primitives71.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    import_primitives71.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.75 6A.25.25 0 0 1 6 5.75h3v-1.5H6A1.75 1.75 0 0 0 4.25 6v3h1.5V6ZM18 18.25h-3v1.5h3A1.75 1.75 0 0 0 19.75 18v-3h-1.5v3a.25.25 0 0 1-.25.25ZM18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5Zm-12.5 9v-3h-1.5v3c0 .966.784 1.75 1.75 1.75h3v-1.5H6a.25.25 0 0 1-.25-.25Z"
    }
  ) });

  // packages/icons/build-module/library/corner-bottom-left.js
  var import_jsx_runtime72 = __toESM(require_jsx_runtime());
  var import_primitives72 = __toESM(require_primitives());
  var corner_bottom_left_default = /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(import_primitives72.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_primitives72.G, { opacity: ".25", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_primitives72.Path, { d: "M5.75 6A.25.25 0 0 1 6 5.75h3v-1.5H6A1.75 1.75 0 0 0 4.25 6v3h1.5V6ZM18 18.25h-3v1.5h3A1.75 1.75 0 0 0 19.75 18v-3h-1.5v3a.25.25 0 0 1-.25.25ZM18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5ZM5.75 18v-3h-1.5v3c0 .966.784 1.75 1.75 1.75h3v-1.5H6a.25.25 0 0 1-.25-.25Z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      import_primitives72.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.75 15v3c0 .138.112.25.25.25h3v1.5H6A1.75 1.75 0 0 1 4.25 18v-3h1.5Z"
      }
    )
  ] });

  // packages/icons/build-module/library/corner-bottom-right.js
  var import_jsx_runtime73 = __toESM(require_jsx_runtime());
  var import_primitives73 = __toESM(require_primitives());
  var corner_bottom_right_default = /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_primitives73.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_primitives73.G, { opacity: ".25", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_primitives73.Path, { d: "M5.75 6A.25.25 0 0 1 6 5.75h3v-1.5H6A1.75 1.75 0 0 0 4.25 6v3h1.5V6ZM18 18.25h-3v1.5h3A1.75 1.75 0 0 0 19.75 18v-3h-1.5v3a.25.25 0 0 1-.25.25ZM18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5ZM5.75 18v-3h-1.5v3c0 .966.784 1.75 1.75 1.75h3v-1.5H6a.25.25 0 0 1-.25-.25Z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      import_primitives73.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 18.25h3a.25.25 0 0 0 .25-.25v-3h1.5v3A1.75 1.75 0 0 1 18 19.75h-3v-1.5Z"
      }
    )
  ] });

  // packages/icons/build-module/library/corner-top-left.js
  var import_jsx_runtime74 = __toESM(require_jsx_runtime());
  var import_primitives74 = __toESM(require_primitives());
  var corner_top_left_default = /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_primitives74.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_primitives74.G, { opacity: ".25", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_primitives74.Path, { d: "M5.75 6A.25.25 0 0 1 6 5.75h3v-1.5H6A1.75 1.75 0 0 0 4.25 6v3h1.5V6ZM18 18.25h-3v1.5h3A1.75 1.75 0 0 0 19.75 18v-3h-1.5v3a.25.25 0 0 1-.25.25ZM18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5ZM5.75 18v-3h-1.5v3c0 .966.784 1.75 1.75 1.75h3v-1.5H6a.25.25 0 0 1-.25-.25Z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
      import_primitives74.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 5.75a.25.25 0 0 0-.25.25v3h-1.5V6c0-.966.784-1.75 1.75-1.75h3v1.5H6Z"
      }
    )
  ] });

  // packages/icons/build-module/library/corner-top-right.js
  var import_jsx_runtime75 = __toESM(require_jsx_runtime());
  var import_primitives75 = __toESM(require_primitives());
  var corner_top_right_default = /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_primitives75.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_primitives75.G, { opacity: ".25", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_primitives75.Path, { d: "M5.75 6A.25.25 0 0 1 6 5.75h3v-1.5H6A1.75 1.75 0 0 0 4.25 6v3h1.5V6ZM18 18.25h-3v1.5h3A1.75 1.75 0 0 0 19.75 18v-3h-1.5v3a.25.25 0 0 1-.25.25ZM18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5ZM5.75 18v-3h-1.5v3c0 .966.784 1.75 1.75 1.75h3v-1.5H6a.25.25 0 0 1-.25-.25Z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      import_primitives75.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.25 9V6a.25.25 0 0 0-.25-.25h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5Z"
      }
    )
  ] });

  // packages/icons/build-module/library/cover.js
  var import_jsx_runtime76 = __toESM(require_jsx_runtime());
  var import_primitives76 = __toESM(require_primitives());
  var cover_default = /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_primitives76.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_primitives76.Path, { d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z" }) });

  // packages/icons/build-module/library/create.js
  var import_jsx_runtime77 = __toESM(require_jsx_runtime());
  var import_primitives77 = __toESM(require_primitives());
  var create_default = /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_primitives77.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_primitives77.Path, { d: "M16 11.2h-3.2V8h-1.6v3.2H8v1.6h3.2V16h1.6v-3.2H16z" }) });

  // packages/icons/build-module/library/crop.js
  var import_jsx_runtime78 = __toESM(require_jsx_runtime());
  var import_primitives78 = __toESM(require_primitives());
  var crop_default = /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_primitives78.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_primitives78.Path, { d: "M18 20v-2h2v-1.5H7.75a.25.25 0 0 1-.25-.25V4H6v2H4v1.5h2v8.75c0 .966.784 1.75 1.75 1.75h8.75v2H18ZM9.273 7.5h6.977a.25.25 0 0 1 .25.25v6.977H18V7.75A1.75 1.75 0 0 0 16.25 6H9.273v1.5Z" }) });

  // packages/icons/build-module/library/currency-dollar.js
  var import_jsx_runtime79 = __toESM(require_jsx_runtime());
  var import_primitives79 = __toESM(require_primitives());
  var currency_dollar_default = /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_primitives79.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_primitives79.Path, { d: "M10.7 9.6c.3-.2.8-.4 1.3-.4s1 .2 1.3.4c.3.2.4.5.4.6 0 .4.3.8.8.8s.8-.3.8-.8c0-.8-.5-1.4-1.1-1.9-.4-.3-.9-.5-1.4-.6v-.3c0-.4-.3-.8-.8-.8s-.8.3-.8.8v.3c-.5 0-1 .3-1.4.6-.6.4-1.1 1.1-1.1 1.9s.5 1.4 1.1 1.9c.6.4 1.4.6 2.2.6h.2c.5 0 .9.2 1.1.4.3.2.4.5.4.6s0 .4-.4.6c-.3.2-.8.4-1.3.4s-1-.2-1.3-.4c-.3-.2-.4-.5-.4-.6 0-.4-.3-.8-.8-.8s-.8.3-.8.8c0 .8.5 1.4 1.1 1.9.4.3.9.5 1.4.6v.3c0 .4.3.8.8.8s.8-.3.8-.8v-.3c.5 0 1-.3 1.4-.6.6-.4 1.1-1.1 1.1-1.9s-.5-1.4-1.1-1.9c-.5-.4-1.2-.6-1.9-.6H12c-.6 0-1-.2-1.3-.4-.3-.2-.4-.5-.4-.6s0-.4.4-.6ZM12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5Z" }) });

  // packages/icons/build-module/library/currency-euro.js
  var import_jsx_runtime80 = __toESM(require_jsx_runtime());
  var import_primitives80 = __toESM(require_primitives());
  var currency_euro_default = /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_primitives80.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_primitives80.Path, { d: "M11.9 9.3c.4 0 .8 0 1.1.2.4.1.7.3 1 .6.1.1.3.2.5.2s.4 0 .5-.2c.1-.1.2-.3.2-.5s0-.4-.2-.5c-.5-.5-1.1-.8-1.7-1.1-.7-.2-1.4-.2-2-.1-.7.1-1.3.4-1.9.8-.5.4-1 1-1.3 1.6h-.6c-.2 0-.4 0-.5.2-.1.1-.2.3-.2.5s0 .4.2.5c.1.1.3.2.5.2h.3v.5h-.3c-.2 0-.4 0-.5.2-.1.1-.2.3-.2.5s0 .4.2.5c.1.1.3.2.5.2h.6c.3.6.7 1.2 1.3 1.6.5.4 1.2.7 1.9.8.7.1 1.4 0 2-.1.7-.2 1.3-.6 1.7-1.1.1-.1.2-.3.2-.5s0-.4-.2-.5-.3-.2-.5-.2-.4 0-.5.2c-.3.3-.6.5-1 .6-.4.1-.7.2-1.1.2-.4 0-.8-.1-1.1-.3-.3-.2-.6-.4-.9-.7h.6c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.5s0-.4-.2-.5c-.1-.1-.3-.2-.5-.2H9.3v-.5h2.2c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.5s0-.4-.2-.5c-.1-.1-.3-.2-.5-.2H9.9c.2-.3.5-.5.9-.7s.7-.3 1.1-.3ZM12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5Z" }) });

  // packages/icons/build-module/library/currency-pound.js
  var import_jsx_runtime81 = __toESM(require_jsx_runtime());
  var import_primitives81 = __toESM(require_primitives());
  var currency_pound_default = /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_primitives81.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    import_primitives81.Path,
    {
      fillRule: "evenodd",
      d: "M14.4 14.5H11c.3-.4.5-1 .5-1.6v-.1h1c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.5s0-.4-.2-.5c-.1-.1-.3-.2-.5-.2h-1.3c0-.1-.1-.3-.2-.4 0-.1-.1-.2-.1-.4v-.3c0-.8.6-1.4 1.4-1.4s.6 0 .8.2c.2.2.4.4.5.6 0 .2.2.3.4.4h.6c.2 0 .3-.2.4-.4v-.6c-.3-.6-.7-1.2-1.3-1.5-.6-.3-1.3-.4-2-.3s-1.3.5-1.7 1c-.4.5-.7 1.2-.7 1.9 0 .3 0 .5.2.8 0 0 0 .2.1.3-.2 0-.4 0-.5.2-.1.1-.2.3-.2.5s0 .4.2.5c.1.1.3.2.5.2h.5v.1c0 .4-.2.8-.5 1.2l-.6.6c-.1 0-.2.2-.3.4v.5c0 .1.1.3.3.4.1 0 .3.1.4.1h5.1c.2 0 .4 0 .5-.2.1-.1.2-.3.2-.5s0-.4-.2-.5c-.1-.1-.3-.2-.5-.2ZM12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5Z"
    }
  ) });

  // packages/icons/build-module/library/custom-link.js
  var import_jsx_runtime82 = __toESM(require_jsx_runtime());
  var import_primitives82 = __toESM(require_primitives());
  var custom_link_default = /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_primitives82.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_primitives82.Path, { d: "M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" }) });

  // packages/icons/build-module/library/custom-post-type.js
  var import_jsx_runtime83 = __toESM(require_jsx_runtime());
  var import_primitives83 = __toESM(require_primitives());
  var custom_post_type_default = /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_primitives83.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_primitives83.Path, { d: "M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm.8-4l.7.7 2-2V12h1V9.2l2 2 .7-.7-2-2H12v-1H9.2l2-2-.7-.7-2 2V4h-1v2.8l-2-2-.7.7 2 2H4v1h2.8l-2 2z" }) });

  // packages/icons/build-module/library/dashboard.js
  var import_jsx_runtime84 = __toESM(require_jsx_runtime());
  var import_primitives84 = __toESM(require_primitives());
  var dashboard_default = /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_primitives84.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_primitives84.Path, { d: "M12 5a8 8 0 0 1 3.842.984L14.726 7.1a6.502 6.502 0 0 0-7.323 1.303 6.5 6.5 0 0 0 0 9.194l-1.06 1.06A8 8 0 0 1 12 5Zm7.021 4.168a8 8 0 0 1-1.364 9.49l-1.06-1.061a6.5 6.5 0 0 0 1.307-7.312l1.117-1.117ZM17.47 6.47a.75.75 0 1 1 1.06 1.06l-5.083 5.082a1.5 1.5 0 1 1-1.06-1.06L17.47 6.47Z" }) });

  // packages/icons/build-module/library/desktop.js
  var import_jsx_runtime85 = __toESM(require_jsx_runtime());
  var import_primitives85 = __toESM(require_primitives());
  var desktop_default = /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_primitives85.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_primitives85.Path, { d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z" }) });

  // packages/icons/build-module/library/details.js
  var import_jsx_runtime86 = __toESM(require_jsx_runtime());
  var import_primitives86 = __toESM(require_primitives());
  var details_default = /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_primitives86.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
      import_primitives86.Path,
      {
        d: "M4 16h10v1.5H4V16Zm0-4.5h16V13H4v-1.5ZM10 7h10v1.5H10V7Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_primitives86.Path, { d: "m4 5.25 4 2.5-4 2.5v-5Z" })
  ] });

  // packages/icons/build-module/library/download.js
  var import_jsx_runtime87 = __toESM(require_jsx_runtime());
  var import_primitives87 = __toESM(require_primitives());
  var download_default = /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_primitives87.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_primitives87.Path, { d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z" }) });

  // packages/icons/build-module/library/drafts.js
  var import_jsx_runtime88 = __toESM(require_jsx_runtime());
  var import_primitives88 = __toESM(require_primitives());
  var drafts_default = /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_primitives88.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
    import_primitives88.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 4a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z"
    }
  ) });

  // packages/icons/build-module/library/drag-handle.js
  var import_jsx_runtime89 = __toESM(require_jsx_runtime());
  var import_primitives89 = __toESM(require_primitives());
  var drag_handle_default = /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_primitives89.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_primitives89.Path, { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" }) });

  // packages/icons/build-module/library/drawer-left.js
  var import_jsx_runtime90 = __toESM(require_jsx_runtime());
  var import_primitives90 = __toESM(require_primitives());
  var drawer_left_default = /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_primitives90.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
    import_primitives90.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 18.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h2.5v13zm10-.5c0 .3-.2.5-.5.5h-8v-13h8c.3 0 .5.2.5.5v12z"
    }
  ) });

  // packages/icons/build-module/library/drawer-right.js
  var import_jsx_runtime91 = __toESM(require_jsx_runtime());
  var import_primitives91 = __toESM(require_primitives());
  var drawer_right_default = /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_primitives91.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
    import_primitives91.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"
    }
  ) });

  // packages/icons/build-module/library/envelope.js
  var import_jsx_runtime92 = __toESM(require_jsx_runtime());
  var import_primitives92 = __toESM(require_primitives());
  var envelope_default = /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_primitives92.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
    import_primitives92.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-.5h14c.3 0 .5.2.5.5v1L12 13.5 4.5 7.9V7c0-.3.2-.5.5-.5Zm-.5 3.3V17c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V9.8L12 15.4 4.5 9.8Z"
    }
  ) });

  // packages/icons/build-module/library/error.js
  var import_jsx_runtime93 = __toESM(require_jsx_runtime());
  var import_primitives93 = __toESM(require_primitives());
  var error_default = /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_primitives93.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
    import_primitives93.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.218 5.377a.25.25 0 0 0-.436 0l-7.29 12.96a.25.25 0 0 0 .218.373h14.58a.25.25 0 0 0 .218-.372l-7.29-12.96Zm-1.743-.735c.669-1.19 2.381-1.19 3.05 0l7.29 12.96a1.75 1.75 0 0 1-1.525 2.608H4.71a1.75 1.75 0 0 1-1.525-2.608l7.29-12.96ZM12.75 17.46h-1.5v-1.5h1.5v1.5Zm-1.5-3h1.5v-5h-1.5v5Z"
    }
  ) });

  // packages/icons/build-module/library/external.js
  var import_jsx_runtime94 = __toESM(require_jsx_runtime());
  var import_primitives94 = __toESM(require_primitives());
  var external_default = /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_primitives94.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_primitives94.Path, { d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z" }) });

  // packages/icons/build-module/library/file.js
  var import_jsx_runtime95 = __toESM(require_jsx_runtime());
  var import_primitives95 = __toESM(require_primitives());
  var file_default = /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(import_primitives95.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
    import_primitives95.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"
    }
  ) });

  // packages/icons/build-module/library/filter.js
  var import_jsx_runtime96 = __toESM(require_jsx_runtime());
  var import_primitives96 = __toESM(require_primitives());
  var filter_default = /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_primitives96.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_primitives96.Path, { d: "M12 4 4 19h16L12 4zm0 3.2 5.5 10.3H12V7.2z" }) });

  // packages/icons/build-module/library/flip-horizontal.js
  var import_jsx_runtime97 = __toESM(require_jsx_runtime());
  var import_primitives97 = __toESM(require_primitives());
  var flip_horizontal_default = /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_primitives97.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_primitives97.Path, { d: "M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z" }) });

  // packages/icons/build-module/library/flip-vertical.js
  var import_jsx_runtime98 = __toESM(require_jsx_runtime());
  var import_primitives98 = __toESM(require_primitives());
  var flip_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_primitives98.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_primitives98.Path, { d: "M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z" }) });

  // packages/icons/build-module/library/footer.js
  var import_jsx_runtime99 = __toESM(require_jsx_runtime());
  var import_primitives99 = __toESM(require_primitives());
  var footer_default = /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_primitives99.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
    import_primitives99.Path,
    {
      fillRule: "evenodd",
      d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
    }
  ) });

  // packages/icons/build-module/library/format-bold.js
  var import_jsx_runtime100 = __toESM(require_jsx_runtime());
  var import_primitives100 = __toESM(require_primitives());
  var format_bold_default = /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_primitives100.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_primitives100.Path, { d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z" }) });

  // packages/icons/build-module/library/format-capitalize.js
  var import_jsx_runtime101 = __toESM(require_jsx_runtime());
  var import_primitives101 = __toESM(require_primitives());
  var format_capitalize_default = /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_primitives101.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_primitives101.Path, { d: "M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z" }) });

  // packages/icons/build-module/library/format-indent-rtl.js
  var import_jsx_runtime102 = __toESM(require_jsx_runtime());
  var import_primitives102 = __toESM(require_primitives());
  var format_indent_rtl_default = /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_primitives102.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_primitives102.Path, { d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM20.0303 9.03033L17.0607 12L20.0303 14.9697L18.9697 16.0303L15.4697 12.5303L14.9393 12L15.4697 11.4697L18.9697 7.96967L20.0303 9.03033Z" }) });

  // packages/icons/build-module/library/format-indent.js
  var import_jsx_runtime103 = __toESM(require_jsx_runtime());
  var import_primitives103 = __toESM(require_primitives());
  var format_indent_default = /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(import_primitives103.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(import_primitives103.Path, { d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z" }) });

  // packages/icons/build-module/library/format-italic.js
  var import_jsx_runtime104 = __toESM(require_jsx_runtime());
  var import_primitives104 = __toESM(require_primitives());
  var format_italic_default = /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_primitives104.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_primitives104.Path, { d: "M12.5 5L10 19h1.9l2.5-14z" }) });

  // packages/icons/build-module/library/format-list-bullets-rtl.js
  var import_jsx_runtime105 = __toESM(require_jsx_runtime());
  var import_primitives105 = __toESM(require_primitives());
  var format_list_bullets_rtl_default = /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_primitives105.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_primitives105.Path, { d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }) });

  // packages/icons/build-module/library/format-list-bullets.js
  var import_jsx_runtime106 = __toESM(require_jsx_runtime());
  var import_primitives106 = __toESM(require_primitives());
  var format_list_bullets_default = /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(import_primitives106.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(import_primitives106.Path, { d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) });

  // packages/icons/build-module/library/format-list-numbered-rtl.js
  var import_jsx_runtime107 = __toESM(require_jsx_runtime());
  var import_primitives107 = __toESM(require_primitives());
  var format_list_numbered_rtl_default = /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_primitives107.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_primitives107.Path, { d: "M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z" }) });

  // packages/icons/build-module/library/format-list-numbered.js
  var import_jsx_runtime108 = __toESM(require_jsx_runtime());
  var import_primitives108 = __toESM(require_primitives());
  var format_list_numbered_default = /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_primitives108.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_primitives108.Path, { d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z" }) });

  // packages/icons/build-module/library/format-lowercase.js
  var import_jsx_runtime109 = __toESM(require_jsx_runtime());
  var import_primitives109 = __toESM(require_primitives());
  var format_lowercase_default = /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_primitives109.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_primitives109.Path, { d: "M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z" }) });

  // packages/icons/build-module/library/format-ltr.js
  var import_jsx_runtime110 = __toESM(require_jsx_runtime());
  var import_primitives110 = __toESM(require_primitives());
  var format_ltr_default = /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_primitives110.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_primitives110.Path, { d: "M3 9c0 2.8 2.2 5 5 5v-.2V20h1.5V5.5H12V20h1.5V5.5h3V4H8C5.2 4 3 6.2 3 9Zm15.9-1-1.1 1 2.6 3-2.6 3 1.1 1 3.4-4-3.4-4Z" }) });

  // packages/icons/build-module/library/format-outdent-rtl.js
  var import_jsx_runtime111 = __toESM(require_jsx_runtime());
  var import_primitives111 = __toESM(require_primitives());
  var format_outdent_rtl_default = /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_primitives111.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_primitives111.Path, { d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z" }) });

  // packages/icons/build-module/library/format-outdent.js
  var import_jsx_runtime112 = __toESM(require_jsx_runtime());
  var import_primitives112 = __toESM(require_primitives());
  var format_outdent_default = /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_primitives112.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_primitives112.Path, { d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z" }) });

  // packages/icons/build-module/library/format-rtl.js
  var import_jsx_runtime113 = __toESM(require_jsx_runtime());
  var import_primitives113 = __toESM(require_primitives());
  var format_rtl_default = /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_primitives113.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_primitives113.Path, { d: "M3 9c0 2.8 2.2 5 5 5v-.2V20h1.5V5.5H12V20h1.5V5.5h3V4H8C5.2 4 3 6.2 3 9Zm19.3 0-1.1-1-3.4 4 3.4 4 1.1-1-2.6-3 2.6-3Z" }) });

  // packages/icons/build-module/library/format-strikethrough.js
  var import_jsx_runtime114 = __toESM(require_jsx_runtime());
  var import_primitives114 = __toESM(require_primitives());
  var format_strikethrough_default = /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(import_primitives114.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(import_primitives114.Path, { d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z" }) });

  // packages/icons/build-module/library/format-underline.js
  var import_jsx_runtime115 = __toESM(require_jsx_runtime());
  var import_primitives115 = __toESM(require_primitives());
  var format_underline_default = /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_primitives115.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_primitives115.Path, { d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z" }) });

  // packages/icons/build-module/library/format-uppercase.js
  var import_jsx_runtime116 = __toESM(require_jsx_runtime());
  var import_primitives116 = __toESM(require_primitives());
  var format_uppercase_default = /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_primitives116.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_primitives116.Path, { d: "M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z" }) });

  // packages/icons/build-module/library/fullscreen.js
  var import_jsx_runtime117 = __toESM(require_jsx_runtime());
  var import_primitives117 = __toESM(require_primitives());
  var fullscreen_default = /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(import_primitives117.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(import_primitives117.Path, { d: "M6 4a2 2 0 0 0-2 2v3h1.5V6a.5.5 0 0 1 .5-.5h3V4H6Zm3 14.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h3v-1.5Zm6 1.5v-1.5h3a.5.5 0 0 0 .5-.5v-3H20v3a2 2 0 0 1-2 2h-3Zm3-16a2 2 0 0 1 2 2v3h-1.5V6a.5.5 0 0 0-.5-.5h-3V4h3Z" }) });

  // packages/icons/build-module/library/funnel.js
  var import_jsx_runtime118 = __toESM(require_jsx_runtime());
  var import_primitives118 = __toESM(require_primitives());
  var funnel_default = /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_primitives118.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_primitives118.Path, { d: "M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z" }) });

  // packages/icons/build-module/library/gallery.js
  var import_jsx_runtime119 = __toESM(require_jsx_runtime());
  var import_primitives119 = __toESM(require_primitives());
  var gallery_default = /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_primitives119.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    import_primitives119.Path,
    {
      d: "M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/gift.js
  var import_jsx_runtime120 = __toESM(require_jsx_runtime());
  var import_primitives120 = __toESM(require_primitives());
  var gift_default = /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_primitives120.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_primitives120.Path, { d: "M15.333 4C16.6677 4 17.75 5.0823 17.75 6.41699V6.75C17.75 7.20058 17.6394 7.62468 17.4473 8H18.5C19.2767 8 19.9154 8.59028 19.9922 9.34668L20 9.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.72334 20 4.08461 19.4097 4.00781 18.6533L4 18.5V9.5L4.00781 9.34668C4.07949 8.64069 4.64069 8.07949 5.34668 8.00781L5.5 8H6.55273C6.36065 7.62468 6.25 7.20058 6.25 6.75V6.41699C6.25 5.0823 7.3323 4 8.66699 4C10.0436 4.00011 11.2604 4.68183 12 5.72559C12.7396 4.68183 13.9564 4.00011 15.333 4ZM5.5 18.5H11.25V9.5H5.5V18.5ZM12.75 18.5H18.5V9.5H12.75V18.5ZM8.66699 5.5C8.16073 5.5 7.75 5.91073 7.75 6.41699V6.75C7.75 7.44036 8.30964 8 9 8H11.2461C11.2021 6.61198 10.0657 5.50017 8.66699 5.5ZM15.333 5.5C13.9343 5.50017 12.7979 6.61198 12.7539 8H15C15.6904 8 16.25 7.44036 16.25 6.75V6.41699C16.25 5.91073 15.8393 5.5 15.333 5.5Z" }) });

  // packages/icons/build-module/library/globe.js
  var import_jsx_runtime121 = __toESM(require_jsx_runtime());
  var import_primitives121 = __toESM(require_primitives());
  var globe_default = /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_primitives121.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(import_primitives121.Path, { d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm6.5 8c0 .6 0 1.2-.2 1.8h-2.7c0-.6.2-1.1.2-1.8s0-1.2-.2-1.8h2.7c.2.6.2 1.1.2 1.8Zm-.9-3.2h-2.4c-.3-.9-.7-1.8-1.1-2.4-.1-.2-.2-.4-.3-.5 1.6.5 3 1.6 3.8 3ZM12.8 17c-.3.5-.6 1-.8 1.3-.2-.3-.5-.8-.8-1.3-.3-.5-.6-1.1-.8-1.7h3.3c-.2.6-.5 1.2-.8 1.7Zm-2.9-3.2c-.1-.6-.2-1.1-.2-1.8s0-1.2.2-1.8H14c.1.6.2 1.1.2 1.8s0 1.2-.2 1.8H9.9ZM11.2 7c.3-.5.6-1 .8-1.3.2.3.5.8.8 1.3.3.5.6 1.1.8 1.7h-3.3c.2-.6.5-1.2.8-1.7Zm-1-1.2c-.1.2-.2.3-.3.5-.4.7-.8 1.5-1.1 2.4H6.4c.8-1.4 2.2-2.5 3.8-3Zm-1.8 8H5.7c-.2-.6-.2-1.1-.2-1.8s0-1.2.2-1.8h2.7c0 .6-.2 1.1-.2 1.8s0 1.2.2 1.8Zm-2 1.4h2.4c.3.9.7 1.8 1.1 2.4.1.2.2.4.3.5-1.6-.5-3-1.6-3.8-3Zm7.4 3c.1-.2.2-.3.3-.5.4-.7.8-1.5 1.1-2.4h2.4c-.8 1.4-2.2 2.5-3.8 3Z" }) });

  // packages/icons/build-module/library/grid.js
  var import_jsx_runtime122 = __toESM(require_jsx_runtime());
  var import_primitives122 = __toESM(require_primitives());
  var grid_default = /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(import_primitives122.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
    import_primitives122.Path,
    {
      d: "m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/group.js
  var import_jsx_runtime123 = __toESM(require_jsx_runtime());
  var import_primitives123 = __toESM(require_primitives());
  var group_default = /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(import_primitives123.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(import_primitives123.Path, { d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z" }) });

  // packages/icons/build-module/library/handle.js
  var import_jsx_runtime124 = __toESM(require_jsx_runtime());
  var import_primitives124 = __toESM(require_primitives());
  var handle_default = /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(import_primitives124.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(import_primitives124.Path, { d: "M7 16.5h10V15H7v1.5zm0-9V9h10V7.5H7z" }) });

  // packages/icons/build-module/library/header.js
  var import_jsx_runtime125 = __toESM(require_jsx_runtime());
  var import_primitives125 = __toESM(require_primitives());
  var header_default = /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(import_primitives125.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(import_primitives125.Path, { d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" }) });

  // packages/icons/build-module/library/heading-level-1.js
  var import_jsx_runtime126 = __toESM(require_jsx_runtime());
  var import_primitives126 = __toESM(require_primitives());
  var heading_level_1_default = /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(import_primitives126.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(import_primitives126.Path, { d: "M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z" }) });

  // packages/icons/build-module/library/heading-level-2.js
  var import_jsx_runtime127 = __toESM(require_jsx_runtime());
  var import_primitives127 = __toESM(require_primitives());
  var heading_level_2_default = /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_primitives127.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_primitives127.Path, { d: "M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z" }) });

  // packages/icons/build-module/library/heading-level-3.js
  var import_jsx_runtime128 = __toESM(require_jsx_runtime());
  var import_primitives128 = __toESM(require_primitives());
  var heading_level_3_default = /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_primitives128.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_primitives128.Path, { d: "M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z" }) });

  // packages/icons/build-module/library/heading-level-4.js
  var import_jsx_runtime129 = __toESM(require_jsx_runtime());
  var import_primitives129 = __toESM(require_primitives());
  var heading_level_4_default = /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_primitives129.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_primitives129.Path, { d: "M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z" }) });

  // packages/icons/build-module/library/heading-level-5.js
  var import_jsx_runtime130 = __toESM(require_jsx_runtime());
  var import_primitives130 = __toESM(require_primitives());
  var heading_level_5_default = /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_primitives130.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_primitives130.Path, { d: "M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z" }) });

  // packages/icons/build-module/library/heading-level-6.js
  var import_jsx_runtime131 = __toESM(require_jsx_runtime());
  var import_primitives131 = __toESM(require_primitives());
  var heading_level_6_default = /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_primitives131.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_primitives131.Path, { d: "M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z" }) });

  // packages/icons/build-module/library/heading.js
  var import_jsx_runtime132 = __toESM(require_jsx_runtime());
  var import_primitives132 = __toESM(require_primitives());
  var heading_default = /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_primitives132.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_primitives132.Path, { d: "M6 5V18.5911L12 13.8473L18 18.5911V5H6Z" }) });

  // packages/icons/build-module/library/help-filled.js
  var import_jsx_runtime133 = __toESM(require_jsx_runtime());
  var import_primitives133 = __toESM(require_primitives());
  var help_filled_default = /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_primitives133.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
    import_primitives133.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.8 12.5h-1.5V15h1.5v1.5Zm2.1-5.6c-.1.5-.4 1.1-.8 1.5-.4.4-.9.7-1.4.8v.8h-1.5v-1.2c0-.6.5-1 .9-1s.7-.2 1-.5c.2-.3.4-.7.4-1 0-.4-.2-.7-.5-1-.3-.3-.6-.4-1-.4s-.8.2-1.1.4c-.3.3-.4.7-.4 1.1H9c0-.6.2-1.1.5-1.6s.7-.9 1.2-1.1c.5-.2 1.1-.3 1.6-.3s1.1.3 1.5.6c.4.3.8.8 1 1.3.2.5.2 1.1.1 1.6Z"
    }
  ) });

  // packages/icons/build-module/library/help.js
  var import_jsx_runtime134 = __toESM(require_jsx_runtime());
  var import_primitives134 = __toESM(require_primitives());
  var help_default = /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_primitives134.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_primitives134.Path, { d: "M12 4a8 8 0 1 1 .001 16.001A8 8 0 0 1 12 4Zm0 1.5a6.5 6.5 0 1 0-.001 13.001A6.5 6.5 0 0 0 12 5.5Zm.75 11h-1.5V15h1.5v1.5Zm-.445-9.234a3 3 0 0 1 .445 5.89V14h-1.5v-1.25c0-.57.452-.958.917-1.01A1.5 1.5 0 0 0 12 8.75a1.5 1.5 0 0 0-1.5 1.5H9a3 3 0 0 1 3.305-2.984Z" }) });

  // packages/icons/build-module/library/home-button.js
  var import_jsx_runtime135 = __toESM(require_jsx_runtime());
  var import_primitives135 = __toESM(require_primitives());
  var home_button_default = /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_primitives135.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
    import_primitives135.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.25 7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v10A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17V7ZM7 5.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H7Z"
    }
  ) });

  // packages/icons/build-module/library/home.js
  var import_jsx_runtime136 = __toESM(require_jsx_runtime());
  var import_primitives136 = __toESM(require_primitives());
  var home_default = /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_primitives136.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_primitives136.Path, { d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z" }) });

  // packages/icons/build-module/library/html.js
  var import_jsx_runtime137 = __toESM(require_jsx_runtime());
  var import_primitives137 = __toESM(require_primitives());
  var html_default = /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_primitives137.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_primitives137.Path, { d: "M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z" }) });

  // packages/icons/build-module/library/image.js
  var import_jsx_runtime138 = __toESM(require_jsx_runtime());
  var import_primitives138 = __toESM(require_primitives());
  var image_default = /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(import_primitives138.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(import_primitives138.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" }) });

  // packages/icons/build-module/library/inbox.js
  var import_jsx_runtime139 = __toESM(require_jsx_runtime());
  var import_primitives139 = __toESM(require_primitives());
  var inbox_default = /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(import_primitives139.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
    import_primitives139.Path,
    {
      fillRule: "evenodd",
      d: "M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/info.js
  var import_jsx_runtime140 = __toESM(require_jsx_runtime());
  var import_primitives140 = __toESM(require_primitives());
  var info_default = /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_primitives140.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
    import_primitives140.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z"
    }
  ) });

  // packages/icons/build-module/library/insert-after.js
  var import_jsx_runtime141 = __toESM(require_jsx_runtime());
  var import_primitives141 = __toESM(require_primitives());
  var insert_after_default = /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_primitives141.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_primitives141.Path, { d: "M9 12h2v-2h2V8h-2V6H9v2H7v2h2v2zm1 4c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM3 19h14v-2H3v2z" }) });

  // packages/icons/build-module/library/insert-before.js
  var import_jsx_runtime142 = __toESM(require_jsx_runtime());
  var import_primitives142 = __toESM(require_primitives());
  var insert_before_default = /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(import_primitives142.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(import_primitives142.Path, { d: "M11 8H9v2H7v2h2v2h2v-2h2v-2h-2V8zm-1-4c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM3 1v2h14V1H3z" }) });

  // packages/icons/build-module/library/institution.js
  var import_jsx_runtime143 = __toESM(require_jsx_runtime());
  var import_primitives143 = __toESM(require_primitives());
  var institution_default = /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(import_primitives143.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(
    import_primitives143.Path,
    {
      fillRule: "evenodd",
      d: "M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/justify-bottom.js
  var import_jsx_runtime144 = __toESM(require_jsx_runtime());
  var import_primitives144 = __toESM(require_primitives());
  var justify_bottom_default = /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(import_primitives144.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime144.jsx)(import_primitives144.Path, { d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" }) });

  // packages/icons/build-module/library/justify-center-vertical.js
  var import_jsx_runtime145 = __toESM(require_jsx_runtime());
  var import_primitives145 = __toESM(require_primitives());
  var justify_center_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_primitives145.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime145.jsx)(import_primitives145.Path, { d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" }) });

  // packages/icons/build-module/library/justify-center.js
  var import_jsx_runtime146 = __toESM(require_jsx_runtime());
  var import_primitives146 = __toESM(require_primitives());
  var justify_center_default = /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(import_primitives146.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime146.jsx)(import_primitives146.Path, { d: "M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z" }) });

  // packages/icons/build-module/library/justify-left.js
  var import_jsx_runtime147 = __toESM(require_jsx_runtime());
  var import_primitives147 = __toESM(require_primitives());
  var justify_left_default = /* @__PURE__ */ (0, import_jsx_runtime147.jsx)(import_primitives147.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime147.jsx)(import_primitives147.Path, { d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z" }) });

  // packages/icons/build-module/library/justify-right.js
  var import_jsx_runtime148 = __toESM(require_jsx_runtime());
  var import_primitives148 = __toESM(require_primitives());
  var justify_right_default = /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_primitives148.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime148.jsx)(import_primitives148.Path, { d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z" }) });

  // packages/icons/build-module/library/justify-space-between-vertical.js
  var import_jsx_runtime149 = __toESM(require_jsx_runtime());
  var import_primitives149 = __toESM(require_primitives());
  var justify_space_between_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime149.jsx)(import_primitives149.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime149.jsx)(import_primitives149.Path, { d: "M7 4H17V8L7 8V4ZM7 16L17 16V20L7 20V16ZM20 11.25H4V12.75H20V11.25Z" }) });

  // packages/icons/build-module/library/justify-space-between.js
  var import_jsx_runtime150 = __toESM(require_jsx_runtime());
  var import_primitives150 = __toESM(require_primitives());
  var justify_space_between_default = /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(import_primitives150.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime150.jsx)(import_primitives150.Path, { d: "M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z" }) });

  // packages/icons/build-module/library/justify-stretch-vertical.js
  var import_jsx_runtime151 = __toESM(require_jsx_runtime());
  var import_primitives151 = __toESM(require_primitives());
  var justify_stretch_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(import_primitives151.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime151.jsx)(import_primitives151.Path, { d: "M4 4L20 4L20 5.5L4 5.5L4 4ZM10 7L14 7L14 17L10 17L10 7ZM20 18.5L4 18.5L4 20L20 20L20 18.5Z" }) });

  // packages/icons/build-module/library/justify-stretch.js
  var import_jsx_runtime152 = __toESM(require_jsx_runtime());
  var import_primitives152 = __toESM(require_primitives());
  var justify_stretch_default = /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_primitives152.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime152.jsx)(import_primitives152.Path, { d: "M4 4H5.5V20H4V4ZM7 10L17 10V14L7 14V10ZM20 4H18.5V20H20V4Z" }) });

  // packages/icons/build-module/library/justify-top.js
  var import_jsx_runtime153 = __toESM(require_jsx_runtime());
  var import_primitives153 = __toESM(require_primitives());
  var justify_top_default = /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(import_primitives153.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime153.jsx)(import_primitives153.Path, { d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z" }) });

  // packages/icons/build-module/library/key.js
  var import_jsx_runtime154 = __toESM(require_jsx_runtime());
  var import_primitives154 = __toESM(require_primitives());
  var key_default = /* @__PURE__ */ (0, import_jsx_runtime154.jsx)(import_primitives154.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime154.jsx)(
    import_primitives154.Path,
    {
      d: "M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/keyboard-close.js
  var import_jsx_runtime155 = __toESM(require_jsx_runtime());
  var import_primitives155 = __toESM(require_primitives());
  var keyboard_close_default = /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(import_primitives155.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "-2 -2 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime155.jsx)(import_primitives155.Path, { d: "M18,0 L2,0 C0.9,0 0.01,0.9 0.01,2 L0,12 C0,13.1 0.9,14 2,14 L18,14 C19.1,14 20,13.1 20,12 L20,2 C20,0.9 19.1,0 18,0 Z M18,12 L2,12 L2,2 L18,2 L18,12 Z M9,3 L11,3 L11,5 L9,5 L9,3 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M6,3 L8,3 L8,5 L6,5 L6,3 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M3,3 L5,3 L5,5 L3,5 L3,3 Z M6,9 L14,9 L14,11 L6,11 L6,9 Z M12,6 L14,6 L14,8 L12,8 L12,6 Z M12,3 L14,3 L14,5 L12,5 L12,3 Z M15,6 L17,6 L17,8 L15,8 L15,6 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M10,20 L14,16 L6,16 L10,20 Z" }) });

  // packages/icons/build-module/library/keyboard-return.js
  var import_jsx_runtime156 = __toESM(require_jsx_runtime());
  var import_primitives156 = __toESM(require_primitives());
  var keyboard_return_default = /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(import_primitives156.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime156.jsx)(import_primitives156.Path, { d: "m6.734 16.106 2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.158 1.093-1.028-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734Z" }) });

  // packages/icons/build-module/library/keyboard.js
  var import_jsx_runtime157 = __toESM(require_jsx_runtime());
  var import_primitives157 = __toESM(require_primitives());
  var keyboard_default = /* @__PURE__ */ (0, import_jsx_runtime157.jsxs)(import_primitives157.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_primitives157.Path, { d: "m16 15.5h-8v-1.5h8zm-7.5-2.5h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm-9-3h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime157.jsx)(import_primitives157.Path, { d: "m18.5 6.5h-13a.5.5 0 0 0 -.5.5v9.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0 -.5-.5zm-13-1.5h13a2 2 0 0 1 2 2v9.5a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2-2v-9.5a2 2 0 0 1 2-2z" })
  ] });

  // packages/icons/build-module/library/language.js
  var import_jsx_runtime158 = __toESM(require_jsx_runtime());
  var import_primitives158 = __toESM(require_primitives());
  var language_default = /* @__PURE__ */ (0, import_jsx_runtime158.jsx)(import_primitives158.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime158.jsx)(import_primitives158.Path, { d: "M17.5 10h-1.7l-3.7 10.5h1.7l.9-2.6h3.9l.9 2.6h1.7L17.5 10zm-2.2 6.3 1.4-4 1.4 4h-2.8zm-4.8-3.8c1.6-1.8 2.9-3.6 3.7-5.7H16V5.2h-5.8V3H8.8v2.2H3v1.5h9.6c-.7 1.6-1.8 3.1-3.1 4.6C8.6 10.2 7.8 9 7.2 8H5.6c.6 1.4 1.7 2.9 2.9 4.4l-2.4 2.4c-.3.4-.7.8-1.1 1.2l1 1 1.2-1.2c.8-.8 1.6-1.5 2.3-2.3.8.9 1.7 1.7 2.5 2.5l.6-1.5c-.7-.6-1.4-1.3-2.1-2z" }) });

  // packages/icons/build-module/library/layout.js
  var import_jsx_runtime159 = __toESM(require_jsx_runtime());
  var import_primitives159 = __toESM(require_primitives());
  var layout_default = /* @__PURE__ */ (0, import_jsx_runtime159.jsx)(import_primitives159.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime159.jsx)(import_primitives159.Path, { d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" }) });

  // packages/icons/build-module/library/level-up.js
  var import_jsx_runtime160 = __toESM(require_jsx_runtime());
  var import_primitives160 = __toESM(require_primitives());
  var level_up_default = /* @__PURE__ */ (0, import_jsx_runtime160.jsx)(import_primitives160.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime160.jsx)(import_primitives160.Path, { d: "m13.53 8.47-1.06 1.06-2.72-2.72V12h-1.5V6.81L5.53 9.53 4.47 8.47 9 3.94l4.53 4.53Zm-1.802 7.968c1.307.697 3.235.812 5.772.812v1.5c-2.463 0-4.785-.085-6.478-.988a4.721 4.721 0 0 1-2.07-2.13C8.48 14.67 8.25 13.471 8.25 12h1.5c0 1.328.208 2.28.548 2.969.332.675.81 1.138 1.43 1.47Z" }) });

  // packages/icons/build-module/library/lifesaver.js
  var import_jsx_runtime161 = __toESM(require_jsx_runtime());
  var import_primitives161 = __toESM(require_primitives());
  var lifesaver_default = /* @__PURE__ */ (0, import_jsx_runtime161.jsx)(import_primitives161.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime161.jsx)(
    import_primitives161.Path,
    {
      fillRule: "evenodd",
      d: "M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/line-dashed.js
  var import_jsx_runtime162 = __toESM(require_jsx_runtime());
  var import_primitives162 = __toESM(require_primitives());
  var line_dashed_default = /* @__PURE__ */ (0, import_jsx_runtime162.jsx)(import_primitives162.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime162.jsx)(
    import_primitives162.Path,
    {
      fillRule: "evenodd",
      d: "M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/line-dotted.js
  var import_jsx_runtime163 = __toESM(require_jsx_runtime());
  var import_primitives163 = __toESM(require_primitives());
  var line_dotted_default = /* @__PURE__ */ (0, import_jsx_runtime163.jsx)(import_primitives163.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime163.jsx)(
    import_primitives163.Path,
    {
      fillRule: "evenodd",
      d: "M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/line-solid.js
  var import_jsx_runtime164 = __toESM(require_jsx_runtime());
  var import_primitives164 = __toESM(require_primitives());
  var line_solid_default = /* @__PURE__ */ (0, import_jsx_runtime164.jsx)(import_primitives164.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime164.jsx)(import_primitives164.Path, { d: "M5 11.25h14v1.5H5z" }) });

  // packages/icons/build-module/library/link-off.js
  var import_jsx_runtime165 = __toESM(require_jsx_runtime());
  var import_primitives165 = __toESM(require_primitives());
  var link_off_default = /* @__PURE__ */ (0, import_jsx_runtime165.jsx)(import_primitives165.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime165.jsx)(import_primitives165.Path, { d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z" }) });

  // packages/icons/build-module/library/link.js
  var import_jsx_runtime166 = __toESM(require_jsx_runtime());
  var import_primitives166 = __toESM(require_primitives());
  var link_default = /* @__PURE__ */ (0, import_jsx_runtime166.jsx)(import_primitives166.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime166.jsx)(import_primitives166.Path, { d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z" }) });

  // packages/icons/build-module/library/list-item.js
  var import_jsx_runtime167 = __toESM(require_jsx_runtime());
  var import_primitives167 = __toESM(require_primitives());
  var list_item_default = /* @__PURE__ */ (0, import_jsx_runtime167.jsx)(import_primitives167.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime167.jsx)(import_primitives167.Path, { d: "M12 11v1.5h8V11h-8zm-6-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) });

  // packages/icons/build-module/library/list-view.js
  var import_jsx_runtime168 = __toESM(require_jsx_runtime());
  var import_primitives168 = __toESM(require_primitives());
  var list_view_default = /* @__PURE__ */ (0, import_jsx_runtime168.jsx)(import_primitives168.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime168.jsx)(import_primitives168.Path, { d: "M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z" }) });

  // packages/icons/build-module/library/list.js
  var import_jsx_runtime169 = __toESM(require_jsx_runtime());
  var import_primitives169 = __toESM(require_primitives());
  var list_default = /* @__PURE__ */ (0, import_jsx_runtime169.jsx)(import_primitives169.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime169.jsx)(import_primitives169.Path, { d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" }) });

  // packages/icons/build-module/library/lock-outline.js
  var import_jsx_runtime170 = __toESM(require_jsx_runtime());
  var import_primitives170 = __toESM(require_primitives());
  var lock_outline_default = /* @__PURE__ */ (0, import_jsx_runtime170.jsx)(import_primitives170.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime170.jsx)(import_primitives170.Path, { d: "M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM9.8 7c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v3H9.8V7zm6.7 11.5h-9v-7h9v7z" }) });

  // packages/icons/build-module/library/lock-small.js
  var import_jsx_runtime171 = __toESM(require_jsx_runtime());
  var import_primitives171 = __toESM(require_primitives());
  var lock_small_default = /* @__PURE__ */ (0, import_jsx_runtime171.jsx)(import_primitives171.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime171.jsx)(
    import_primitives171.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 11h-.2V9c0-1.5-1.2-2.8-2.8-2.8S9.2 7.5 9.2 9v2H9c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-1.8 0h-2.5V9c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v2z"
    }
  ) });

  // packages/icons/build-module/library/lock.js
  var import_jsx_runtime172 = __toESM(require_jsx_runtime());
  var import_primitives172 = __toESM(require_primitives());
  var lock_default = /* @__PURE__ */ (0, import_jsx_runtime172.jsx)(import_primitives172.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime172.jsx)(import_primitives172.Path, { d: "M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-2.8 0H9.8V7c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3z" }) });

  // packages/icons/build-module/library/login.js
  var import_jsx_runtime173 = __toESM(require_jsx_runtime());
  var import_primitives173 = __toESM(require_primitives());
  var login_default = /* @__PURE__ */ (0, import_jsx_runtime173.jsx)(import_primitives173.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime173.jsx)(import_primitives173.Path, { d: "M11 14.5l1.1 1.1 3-3 .5-.5-.6-.6-3-3-1 1 1.7 1.7H5v1.5h7.7L11 14.5zM16.8 5h-7c-1.1 0-2 .9-2 2v1.5h1.5V7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-1.5H7.8V17c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" }) });

  // packages/icons/build-module/library/loop.js
  var import_jsx_runtime174 = __toESM(require_jsx_runtime());
  var import_primitives174 = __toESM(require_primitives());
  var loop_default = /* @__PURE__ */ (0, import_jsx_runtime174.jsx)(import_primitives174.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime174.jsx)(import_primitives174.Path, { d: "M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z" }) });

  // packages/icons/build-module/library/map-marker.js
  var import_jsx_runtime175 = __toESM(require_jsx_runtime());
  var import_primitives175 = __toESM(require_primitives());
  var map_marker_default = /* @__PURE__ */ (0, import_jsx_runtime175.jsx)(import_primitives175.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime175.jsx)(import_primitives175.Path, { d: "M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z" }) });

  // packages/icons/build-module/library/media-and-text.js
  var import_jsx_runtime176 = __toESM(require_jsx_runtime());
  var import_primitives176 = __toESM(require_primitives());
  var media_and_text_default = /* @__PURE__ */ (0, import_jsx_runtime176.jsx)(import_primitives176.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime176.jsx)(import_primitives176.Path, { d: "M3 6v11.5h8V6H3Zm11 3h7V7.5h-7V9Zm7 3.5h-7V11h7v1.5ZM14 16h7v-1.5h-7V16Z" }) });

  // packages/icons/build-module/library/media.js
  var import_jsx_runtime177 = __toESM(require_jsx_runtime());
  var import_primitives177 = __toESM(require_primitives());
  var media_default = /* @__PURE__ */ (0, import_jsx_runtime177.jsxs)(import_primitives177.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime177.jsx)(import_primitives177.Path, { d: "m7 6.5 4 2.5-4 2.5z" }),
    /* @__PURE__ */ (0, import_jsx_runtime177.jsx)(
      import_primitives177.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"
      }
    )
  ] });

  // packages/icons/build-module/library/megaphone.js
  var import_jsx_runtime178 = __toESM(require_jsx_runtime());
  var import_primitives178 = __toESM(require_primitives());
  var megaphone_default = /* @__PURE__ */ (0, import_jsx_runtime178.jsx)(import_primitives178.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime178.jsx)(
    import_primitives178.Path,
    {
      fillRule: "evenodd",
      d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/menu.js
  var import_jsx_runtime179 = __toESM(require_jsx_runtime());
  var import_primitives179 = __toESM(require_primitives());
  var menu_default = /* @__PURE__ */ (0, import_jsx_runtime179.jsx)(import_primitives179.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime179.jsx)(import_primitives179.Path, { d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" }) });

  // packages/icons/build-module/library/mobile.js
  var import_jsx_runtime180 = __toESM(require_jsx_runtime());
  var import_primitives180 = __toESM(require_primitives());
  var mobile_default = /* @__PURE__ */ (0, import_jsx_runtime180.jsx)(import_primitives180.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime180.jsx)(import_primitives180.Path, { d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z" }) });

  // packages/icons/build-module/library/more-horizontal.js
  var import_jsx_runtime181 = __toESM(require_jsx_runtime());
  var import_primitives181 = __toESM(require_primitives());
  var more_horizontal_default = /* @__PURE__ */ (0, import_jsx_runtime181.jsx)(import_primitives181.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime181.jsx)(import_primitives181.Path, { d: "M11 13h2v-2h-2v2zm-6 0h2v-2H5v2zm12-2v2h2v-2h-2z" }) });

  // packages/icons/build-module/library/more-vertical.js
  var import_jsx_runtime182 = __toESM(require_jsx_runtime());
  var import_primitives182 = __toESM(require_primitives());
  var more_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime182.jsx)(import_primitives182.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime182.jsx)(import_primitives182.Path, { d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z" }) });

  // packages/icons/build-module/library/more.js
  var import_jsx_runtime183 = __toESM(require_jsx_runtime());
  var import_primitives183 = __toESM(require_primitives());
  var more_default = /* @__PURE__ */ (0, import_jsx_runtime183.jsx)(import_primitives183.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime183.jsx)(import_primitives183.Path, { d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z" }) });

  // packages/icons/build-module/library/move-to.js
  var import_jsx_runtime184 = __toESM(require_jsx_runtime());
  var import_primitives184 = __toESM(require_primitives());
  var move_to_default = /* @__PURE__ */ (0, import_jsx_runtime184.jsx)(import_primitives184.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime184.jsx)(import_primitives184.Path, { d: "M19.75 9c0-1.257-.565-2.197-1.39-2.858-.797-.64-1.827-1.017-2.815-1.247-1.802-.42-3.703-.403-4.383-.396L11 4.5V6l.177-.001c.696-.006 2.416-.02 4.028.356.887.207 1.67.518 2.216.957.52.416.829.945.829 1.688 0 .592-.167.966-.407 1.23-.255.281-.656.508-1.236.674-1.19.34-2.82.346-4.607.346h-.077c-1.692 0-3.527 0-4.942.404-.732.209-1.424.545-1.935 1.108-.526.579-.796 1.33-.796 2.238 0 1.257.565 2.197 1.39 2.858.797.64 1.827 1.017 2.815 1.247 1.802.42 3.703.403 4.383.396L13 19.5h.714V22L18 18.5 13.714 15v3H13l-.177.001c-.696.006-2.416.02-4.028-.356-.887-.207-1.67-.518-2.216-.957-.52-.416-.829-.945-.829-1.688 0-.592.167-.966.407-1.23.255-.281.656-.508 1.237-.674 1.189-.34 2.819-.346 4.606-.346h.077c1.692 0 3.527 0 4.941-.404.732-.209 1.425-.545 1.936-1.108.526-.579.796-1.33.796-2.238z" }) });

  // packages/icons/build-module/library/navigation.js
  var import_jsx_runtime185 = __toESM(require_jsx_runtime());
  var import_primitives185 = __toESM(require_primitives());
  var navigation_default = /* @__PURE__ */ (0, import_jsx_runtime185.jsx)(import_primitives185.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime185.jsx)(import_primitives185.Path, { d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z" }) });

  // packages/icons/build-module/library/next.js
  var import_jsx_runtime186 = __toESM(require_jsx_runtime());
  var import_primitives186 = __toESM(require_primitives());
  var next_default = /* @__PURE__ */ (0, import_jsx_runtime186.jsx)(import_primitives186.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime186.jsx)(import_primitives186.Path, { d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z" }) });

  // packages/icons/build-module/library/not-allowed.js
  var import_jsx_runtime187 = __toESM(require_jsx_runtime());
  var import_primitives187 = __toESM(require_primitives());
  var not_allowed_default = /* @__PURE__ */ (0, import_jsx_runtime187.jsx)(import_primitives187.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime187.jsx)(
    import_primitives187.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 18.5A6.5 6.5 0 0 1 6.93 7.931l9.139 9.138A6.473 6.473 0 0 1 12 18.5Zm5.123-2.498a6.5 6.5 0 0 0-9.124-9.124l9.124 9.124ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
    }
  ) });

  // packages/icons/build-module/library/not-found.js
  var import_jsx_runtime188 = __toESM(require_jsx_runtime());
  var import_primitives188 = __toESM(require_primitives());
  var not_found_default = /* @__PURE__ */ (0, import_jsx_runtime188.jsx)(import_primitives188.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime188.jsx)(import_primitives188.Path, { d: "M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v10zm-11-7.6h-.7l-3.1 4.3h2.8V15h1v-1.3h.7v-.8h-.7V9.4zm-.9 3.5H6.3l1.2-1.7v1.7zm5.6-3.2c-.4-.2-.8-.4-1.2-.4-.5 0-.9.1-1.2.4-.4.2-.6.6-.8 1-.2.4-.3.9-.3 1.5s.1 1.1.3 1.6c.2.4.5.8.8 1 .4.2.8.4 1.2.4.5 0 .9-.1 1.2-.4.4-.2.6-.6.8-1 .2-.4.3-1 .3-1.6 0-.6-.1-1.1-.3-1.5-.1-.5-.4-.8-.8-1zm0 3.6c-.1.3-.3.5-.5.7-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2-.2-.1-.4-.4-.5-.7-.1-.3-.2-.7-.2-1.2 0-.7.1-1.2.4-1.5.3-.3.6-.5 1-.5s.7.2 1 .5c.3.3.4.8.4 1.5-.1.5-.1.9-.2 1.2zm5-3.9h-.7l-3.1 4.3h2.8V15h1v-1.3h.7v-.8h-.7V9.4zm-1 3.5H16l1.2-1.7v1.7z" }) });

  // packages/icons/build-module/library/offline.js
  var import_jsx_runtime189 = __toESM(require_jsx_runtime());
  var import_primitives189 = __toESM(require_primitives());
  var offline_default = /* @__PURE__ */ (0, import_jsx_runtime189.jsx)(import_primitives189.SVG, { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime189.jsx)(import_primitives189.Path, { d: "M1.36605 2.81332L2.30144 1.87332L13.5592 13.1867L12.6239 14.1267L7.92702 9.40666C6.74618 9.41999 5.57861 9.87999 4.68302 10.78L3.35623 9.44665C4.19874 8.60665 5.2071 8.03999 6.2818 7.75332L4.7958 6.25999C3.78744 6.67332 2.84542 7.29332 2.02944 8.11332L0.702656 6.77999C1.512 5.97332 2.42085 5.33332 3.3894 4.84665L1.36605 2.81332ZM15.2973 6.77999L13.9705 8.11332C12.3054 6.43999 10.1096 5.61332 7.92039 5.62666L6.20883 3.90665C9.41303 3.34665 12.8229 4.29332 15.2973 6.77999ZM10.1759 7.89332C11.0781 8.21332 11.9273 8.72665 12.6438 9.44665L12.1794 9.90665L10.1759 7.89332ZM6.00981 12.1133L8 14.1133L9.99018 12.1133C8.89558 11.0067 7.11105 11.0067 6.00981 12.1133Z" }) });

  // packages/icons/build-module/library/overlay-text.js
  var import_jsx_runtime190 = __toESM(require_jsx_runtime());
  var import_primitives190 = __toESM(require_primitives());
  var overlay_text_default = /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(import_primitives190.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime190.jsx)(import_primitives190.Path, { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12-9.8c.4 0 .8-.3.9-.7l1.1-3h3.6l.5 1.7h1.9L13 9h-2.2l-3.4 9.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12H20V6c0-1.1-.9-2-2-2zm-6 7l1.4 3.9h-2.7L12 11z" }) });

  // packages/icons/build-module/library/page-break.js
  var import_jsx_runtime191 = __toESM(require_jsx_runtime());
  var import_primitives191 = __toESM(require_primitives());
  var page_break_default = /* @__PURE__ */ (0, import_jsx_runtime191.jsx)(import_primitives191.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime191.jsx)(import_primitives191.Path, { d: "M17.5 9V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v3H8V6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3h1.5Zm0 6.5V18a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2.5H8V18a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2.5h1.5ZM4 13h16v-1.5H4V13Z" }) });

  // packages/icons/build-module/library/page.js
  var import_jsx_runtime192 = __toESM(require_jsx_runtime());
  var import_primitives192 = __toESM(require_primitives());
  var page_default = /* @__PURE__ */ (0, import_jsx_runtime192.jsxs)(import_primitives192.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime192.jsx)(import_primitives192.Path, { d: "M15.5 7.5h-7V9h7V7.5Zm-7 3.5h7v1.5h-7V11Zm7 3.5h-7V16h7v-1.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime192.jsx)(import_primitives192.Path, { d: "M17 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM7 5.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Z" })
  ] });

  // packages/icons/build-module/library/pages.js
  var import_jsx_runtime193 = __toESM(require_jsx_runtime());
  var import_primitives193 = __toESM(require_primitives());
  var pages_default = /* @__PURE__ */ (0, import_jsx_runtime193.jsxs)(import_primitives193.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime193.jsx)(import_primitives193.Path, { d: "M14.5 5.5h-7V7h7V5.5ZM7.5 9h7v1.5h-7V9Zm7 3.5h-7V14h7v-1.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime193.jsx)(import_primitives193.Path, { d: "M16 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM6 3.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime193.jsx)(import_primitives193.Path, { d: "M20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z" })
  ] });

  // packages/icons/build-module/library/paragraph.js
  var import_jsx_runtime194 = __toESM(require_jsx_runtime());
  var import_primitives194 = __toESM(require_primitives());
  var paragraph_default = /* @__PURE__ */ (0, import_jsx_runtime194.jsx)(import_primitives194.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime194.jsx)(import_primitives194.Path, { d: "m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z" }) });

  // packages/icons/build-module/library/payment.js
  var import_jsx_runtime195 = __toESM(require_jsx_runtime());
  var import_primitives195 = __toESM(require_primitives());
  var payment_default = /* @__PURE__ */ (0, import_jsx_runtime195.jsx)(import_primitives195.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime195.jsx)(
    import_primitives195.Path,
    {
      fillRule: "evenodd",
      d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/pencil.js
  var import_jsx_runtime196 = __toESM(require_jsx_runtime());
  var import_primitives196 = __toESM(require_primitives());
  var pencil_default = /* @__PURE__ */ (0, import_jsx_runtime196.jsx)(import_primitives196.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime196.jsx)(import_primitives196.Path, { d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z" }) });

  // packages/icons/build-module/library/pending.js
  var import_jsx_runtime197 = __toESM(require_jsx_runtime());
  var import_primitives197 = __toESM(require_primitives());
  var pending_default = /* @__PURE__ */ (0, import_jsx_runtime197.jsx)(import_primitives197.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime197.jsx)(
    import_primitives197.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 4a4 4 0 0 1-4-4h4V8a4 4 0 0 1 0 8Z"
    }
  ) });

  // packages/icons/build-module/library/people.js
  var import_jsx_runtime198 = __toESM(require_jsx_runtime());
  var import_primitives198 = __toESM(require_primitives());
  var people_default = /* @__PURE__ */ (0, import_jsx_runtime198.jsx)(import_primitives198.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime198.jsx)(
    import_primitives198.Path,
    {
      d: "M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
      fillRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/percent.js
  var import_jsx_runtime199 = __toESM(require_jsx_runtime());
  var import_primitives199 = __toESM(require_primitives());
  var percent_default = /* @__PURE__ */ (0, import_jsx_runtime199.jsx)(import_primitives199.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime199.jsx)(
    import_primitives199.Path,
    {
      fillRule: "evenodd",
      d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/pin-small.js
  var import_jsx_runtime200 = __toESM(require_jsx_runtime());
  var import_primitives200 = __toESM(require_primitives());
  var pin_small_default = /* @__PURE__ */ (0, import_jsx_runtime200.jsx)(import_primitives200.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime200.jsx)(import_primitives200.Path, { d: "M10.97 10.159a3.382 3.382 0 0 0-2.857.955l1.724 1.723-2.836 2.913L7 17h1.25l2.913-2.837 1.723 1.723a3.38 3.38 0 0 0 .606-.825c.33-.63.446-1.343.35-2.032L17 10.695 13.305 7l-2.334 3.159Z" }) });

  // packages/icons/build-module/library/pin.js
  var import_jsx_runtime201 = __toESM(require_jsx_runtime());
  var import_primitives201 = __toESM(require_primitives());
  var pin_default = /* @__PURE__ */ (0, import_jsx_runtime201.jsx)(import_primitives201.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime201.jsx)(import_primitives201.Path, { d: "m21.5 9.1-6.6-6.6-4.2 5.6c-1.2-.1-2.4.1-3.6.7-.1 0-.1.1-.2.1-.5.3-.9.6-1.2.9l3.7 3.7-5.7 5.7v1.1h1.1l5.7-5.7 3.7 3.7c.4-.4.7-.8.9-1.2.1-.1.1-.2.2-.3.6-1.1.8-2.4.6-3.6l5.6-4.1zm-7.3 3.5.1.9c.1.9 0 1.8-.4 2.6l-6-6c.8-.4 1.7-.5 2.6-.4l.9.1L15 4.9 19.1 9l-4.9 3.6z" }) });

  // packages/icons/build-module/library/plugins.js
  var import_jsx_runtime202 = __toESM(require_jsx_runtime());
  var import_primitives202 = __toESM(require_primitives());
  var plugins_default = /* @__PURE__ */ (0, import_jsx_runtime202.jsx)(import_primitives202.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime202.jsx)(import_primitives202.Path, { d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z" }) });

  // packages/icons/build-module/library/plus-circle-filled.js
  var import_jsx_runtime203 = __toESM(require_jsx_runtime());
  var import_primitives203 = __toESM(require_primitives());
  var plus_circle_filled_default = /* @__PURE__ */ (0, import_jsx_runtime203.jsx)(import_primitives203.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime203.jsx)(import_primitives203.Path, { d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm3.8 8.8h-3v3h-1.5v-3h-3v-1.5h3v-3h1.5v3h3v1.5Z" }) });

  // packages/icons/build-module/library/plus-circle.js
  var import_jsx_runtime204 = __toESM(require_jsx_runtime());
  var import_primitives204 = __toESM(require_primitives());
  var plus_circle_default = /* @__PURE__ */ (0, import_jsx_runtime204.jsx)(import_primitives204.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime204.jsx)(
    import_primitives204.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.404 16.596a6.5 6.5 0 1 0 9.192-9.192 6.5 6.5 0 0 0-9.192 9.192ZM6.344 6.343a8 8 0 1 0 11.313 11.314A8 8 0 0 0 6.343 6.343Zm4.906 9.407v-3h-3v-1.5h3v-3h1.5v3h3v1.5h-3v3h-1.5Z"
    }
  ) });

  // packages/icons/build-module/library/plus.js
  var import_jsx_runtime205 = __toESM(require_jsx_runtime());
  var import_primitives205 = __toESM(require_primitives());
  var plus_default = /* @__PURE__ */ (0, import_jsx_runtime205.jsx)(import_primitives205.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime205.jsx)(import_primitives205.Path, { d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z" }) });

  // packages/icons/build-module/library/position-center.js
  var import_jsx_runtime206 = __toESM(require_jsx_runtime());
  var import_primitives206 = __toESM(require_primitives());
  var position_center_default = /* @__PURE__ */ (0, import_jsx_runtime206.jsx)(import_primitives206.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime206.jsx)(import_primitives206.Path, { d: "M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM7 9h10v6H7V9Z" }) });

  // packages/icons/build-module/library/position-left.js
  var import_jsx_runtime207 = __toESM(require_jsx_runtime());
  var import_primitives207 = __toESM(require_primitives());
  var position_left_default = /* @__PURE__ */ (0, import_jsx_runtime207.jsx)(import_primitives207.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime207.jsx)(import_primitives207.Path, { d: "M5 5.5h8V4H5v1.5ZM5 20h8v-1.5H5V20ZM19 9H5v6h14V9Z" }) });

  // packages/icons/build-module/library/position-right.js
  var import_jsx_runtime208 = __toESM(require_jsx_runtime());
  var import_primitives208 = __toESM(require_primitives());
  var position_right_default = /* @__PURE__ */ (0, import_jsx_runtime208.jsx)(import_primitives208.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime208.jsx)(import_primitives208.Path, { d: "M19 5.5h-8V4h8v1.5ZM19 20h-8v-1.5h8V20ZM5 9h14v6H5V9Z" }) });

  // packages/icons/build-module/library/post-author.js
  var import_jsx_runtime209 = __toESM(require_jsx_runtime());
  var import_primitives209 = __toESM(require_primitives());
  var post_author_default = /* @__PURE__ */ (0, import_jsx_runtime209.jsx)(import_primitives209.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime209.jsx)(
    import_primitives209.Path,
    {
      d: "M10 4.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.25 7.5v-1A2.75 2.75 0 0011 8.25H7A2.75 2.75 0 004.25 11v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5zM4 20h9v-1.5H4V20zm16-4H4v-1.5h16V16z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/post-categories.js
  var import_jsx_runtime210 = __toESM(require_jsx_runtime());
  var import_primitives210 = __toESM(require_primitives());
  var post_categories_default = /* @__PURE__ */ (0, import_jsx_runtime210.jsx)(import_primitives210.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime210.jsx)(
    import_primitives210.Path,
    {
      d: "M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/post-comments-count.js
  var import_jsx_runtime211 = __toESM(require_jsx_runtime());
  var import_primitives211 = __toESM(require_primitives());
  var post_comments_count_default = /* @__PURE__ */ (0, import_jsx_runtime211.jsx)(import_primitives211.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime211.jsx)(import_primitives211.Path, { d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-2.2 6.6H7l1.6-2.2c.3-.4.5-.7.6-.9.1-.2.2-.4.2-.5 0-.2-.1-.3-.1-.4-.1-.1-.2-.1-.4-.1s-.4 0-.6.1c-.3.1-.5.3-.7.4l-.2.2-.2-1.2.1-.1c.3-.2.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.9.2.2.1.4.3.6.5.1.2.2.5.2.7 0 .3-.1.6-.2.9-.1.3-.4.7-.7 1.1l-.5.6h1.6v1.2z" }) });

  // packages/icons/build-module/library/post-comments-form.js
  var import_jsx_runtime212 = __toESM(require_jsx_runtime());
  var import_primitives212 = __toESM(require_primitives());
  var post_comments_form_default = /* @__PURE__ */ (0, import_jsx_runtime212.jsx)(import_primitives212.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime212.jsx)(import_primitives212.Path, { d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-.5 6.6H6.7l-1.2 1.2v-6.3h7v5.1z" }) });

  // packages/icons/build-module/library/post-comments.js
  var import_jsx_runtime213 = __toESM(require_jsx_runtime());
  var import_primitives213 = __toESM(require_primitives());
  var post_comments_default = /* @__PURE__ */ (0, import_jsx_runtime213.jsx)(import_primitives213.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime213.jsx)(import_primitives213.Path, { d: "M14 10.1V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1zm-1.5-.5H6.7l-1.2 1.2V4.5h7v5.1zM19 12h-8c-.6 0-1 .4-1 1v6.1c0 .6.4 1 1 1h5.7l1.8 1.8c.1.2.4.3.6.3.1 0 .2 0 .3-.1.4-.1.6-.5.6-.8V13c0-.6-.4-1-1-1zm-.5 7.8l-1.2-1.2h-5.8v-5.1h7v6.3z" }) });

  // packages/icons/build-module/library/post-content.js
  var import_jsx_runtime214 = __toESM(require_jsx_runtime());
  var import_primitives214 = __toESM(require_primitives());
  var post_content_default = /* @__PURE__ */ (0, import_jsx_runtime214.jsx)(import_primitives214.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime214.jsx)(import_primitives214.Path, { d: "M4 6h12V4.5H4V6Zm16 4.5H4V9h16v1.5ZM4 15h16v-1.5H4V15Zm0 4.5h16V18H4v1.5Z" }) });

  // packages/icons/build-module/library/post-date.js
  var import_jsx_runtime215 = __toESM(require_jsx_runtime());
  var import_primitives215 = __toESM(require_primitives());
  var post_date_default = /* @__PURE__ */ (0, import_jsx_runtime215.jsxs)(import_primitives215.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime215.jsx)(import_primitives215.Path, { d: "M11.696 13.972c.356-.546.599-.958.728-1.235a1.79 1.79 0 00.203-.783c0-.264-.077-.47-.23-.618-.148-.153-.354-.23-.618-.23-.295 0-.569.07-.82.212a3.413 3.413 0 00-.738.571l-.147-1.188c.289-.234.59-.41.903-.526.313-.117.66-.175 1.041-.175.375 0 .695.08.959.24.264.153.46.362.59.626.135.265.203.556.203.876 0 .362-.08.734-.24 1.115-.154.381-.427.87-.82 1.466l-.756 1.152H14v1.106h-4l1.696-2.609z" }),
    /* @__PURE__ */ (0, import_jsx_runtime215.jsx)(import_primitives215.Path, { d: "M19.5 7h-15v12a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V7zM3 7V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" })
  ] });

  // packages/icons/build-module/library/post-excerpt.js
  var import_jsx_runtime216 = __toESM(require_jsx_runtime());
  var import_primitives216 = __toESM(require_primitives());
  var post_excerpt_default = /* @__PURE__ */ (0, import_jsx_runtime216.jsx)(import_primitives216.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime216.jsx)(import_primitives216.Path, { d: "M8.001 3.984V9.47c0 1.518-.98 2.5-2.499 2.5h-.5v-1.5h.5c.69 0 1-.31 1-1V6.984H4v-3h4.001ZM4 20h9v-1.5H4V20Zm16-4H4v-1.5h16V16ZM13.001 3.984V9.47c0 1.518-.98 2.5-2.499 2.5h-.5v-1.5h.5c.69 0 1-.31 1-1V6.984H9v-3h4.001Z" }) });

  // packages/icons/build-module/library/post-featured-image.js
  var import_jsx_runtime217 = __toESM(require_jsx_runtime());
  var import_primitives217 = __toESM(require_primitives());
  var post_featured_image_default = /* @__PURE__ */ (0, import_jsx_runtime217.jsx)(import_primitives217.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime217.jsx)(import_primitives217.Path, { d: "M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z" }) });

  // packages/icons/build-module/library/post-list.js
  var import_jsx_runtime218 = __toESM(require_jsx_runtime());
  var import_primitives218 = __toESM(require_primitives());
  var post_list_default = /* @__PURE__ */ (0, import_jsx_runtime218.jsx)(import_primitives218.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime218.jsx)(import_primitives218.Path, { d: "M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z" }) });

  // packages/icons/build-module/library/post-terms.js
  var import_jsx_runtime219 = __toESM(require_jsx_runtime());
  var import_primitives219 = __toESM(require_primitives());
  var post_terms_default = /* @__PURE__ */ (0, import_jsx_runtime219.jsx)(import_primitives219.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime219.jsx)(import_primitives219.Path, { d: "M8.1 12.3c.1.1.3.3.5.3.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.4-.2.5-.3l3-3c.3-.3.5-.7.5-1.1 0-.4-.2-.8-.5-1.1L9.7 3.5c-.1-.2-.3-.3-.5-.3H5c-.4 0-.8.4-.8.8v4.2c0 .2.1.4.2.5l3.7 3.6zM5.8 4.8h3.1l3.4 3.4v.1l-3 3 .5.5-.7-.5-3.3-3.4V4.8zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z" }) });

  // packages/icons/build-module/library/post.js
  var import_jsx_runtime220 = __toESM(require_jsx_runtime());
  var import_primitives220 = __toESM(require_primitives());
  var post_default = /* @__PURE__ */ (0, import_jsx_runtime220.jsx)(import_primitives220.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime220.jsx)(import_primitives220.Path, { d: "m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z" }) });

  // packages/icons/build-module/library/preformatted.js
  var import_jsx_runtime221 = __toESM(require_jsx_runtime());
  var import_primitives221 = __toESM(require_primitives());
  var preformatted_default = /* @__PURE__ */ (0, import_jsx_runtime221.jsx)(import_primitives221.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime221.jsx)(import_primitives221.Path, { d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z" }) });

  // packages/icons/build-module/library/previous.js
  var import_jsx_runtime222 = __toESM(require_jsx_runtime());
  var import_primitives222 = __toESM(require_primitives());
  var previous_default = /* @__PURE__ */ (0, import_jsx_runtime222.jsx)(import_primitives222.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime222.jsx)(import_primitives222.Path, { d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z" }) });

  // packages/icons/build-module/library/published.js
  var import_jsx_runtime223 = __toESM(require_jsx_runtime());
  var import_primitives223 = __toESM(require_primitives());
  var published_default = /* @__PURE__ */ (0, import_jsx_runtime223.jsx)(import_primitives223.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime223.jsx)(
    import_primitives223.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm11.53-1.47-1.06-1.06L11 12.94l-1.47-1.47-1.06 1.06L11 15.06l4.53-4.53Z"
    }
  ) });

  // packages/icons/build-module/library/pull-left.js
  var import_jsx_runtime224 = __toESM(require_jsx_runtime());
  var import_primitives224 = __toESM(require_primitives());
  var pull_left_default = /* @__PURE__ */ (0, import_jsx_runtime224.jsx)(import_primitives224.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime224.jsx)(import_primitives224.Path, { d: "M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z" }) });

  // packages/icons/build-module/library/pull-right.js
  var import_jsx_runtime225 = __toESM(require_jsx_runtime());
  var import_primitives225 = __toESM(require_primitives());
  var pull_right_default = /* @__PURE__ */ (0, import_jsx_runtime225.jsx)(import_primitives225.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime225.jsx)(import_primitives225.Path, { d: "M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z" }) });

  // packages/icons/build-module/library/pullquote.js
  var import_jsx_runtime226 = __toESM(require_jsx_runtime());
  var import_primitives226 = __toESM(require_primitives());
  var pullquote_default = /* @__PURE__ */ (0, import_jsx_runtime226.jsx)(import_primitives226.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime226.jsx)(import_primitives226.Path, { d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z" }) });

  // packages/icons/build-module/library/query-pagination-next.js
  var import_jsx_runtime227 = __toESM(require_jsx_runtime());
  var import_primitives227 = __toESM(require_primitives());
  var query_pagination_next_default = /* @__PURE__ */ (0, import_jsx_runtime227.jsx)(import_primitives227.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime227.jsx)(import_primitives227.Path, { d: "M5 13.5h3v-3H5v3zm5 0h3v-3h-3v3zM17 9l-1 1 2 2-2 2 1 1 3-3-3-3z" }) });

  // packages/icons/build-module/library/query-pagination-numbers.js
  var import_jsx_runtime228 = __toESM(require_jsx_runtime());
  var import_primitives228 = __toESM(require_primitives());
  var query_pagination_numbers_default = /* @__PURE__ */ (0, import_jsx_runtime228.jsx)(import_primitives228.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime228.jsx)(import_primitives228.Path, { d: "M4 13.5h6v-3H4v3zm8.2-2.5.8-.3V14h1V9.3l-2.2.7.4 1zm7.1-1.2c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3-.1-.8-.3-1.1z" }) });

  // packages/icons/build-module/library/query-pagination-previous.js
  var import_jsx_runtime229 = __toESM(require_jsx_runtime());
  var import_primitives229 = __toESM(require_primitives());
  var query_pagination_previous_default = /* @__PURE__ */ (0, import_jsx_runtime229.jsx)(import_primitives229.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime229.jsx)(import_primitives229.Path, { d: "M16 10.5v3h3v-3h-3zm-5 3h3v-3h-3v3zM7 9l-3 3 3 3 1-1-2-2 2-2-1-1z" }) });

  // packages/icons/build-module/library/query-pagination.js
  var import_jsx_runtime230 = __toESM(require_jsx_runtime());
  var import_primitives230 = __toESM(require_primitives());
  var query_pagination_default = /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(import_primitives230.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime230.jsx)(import_primitives230.Path, { d: "M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z" }) });

  // packages/icons/build-module/library/quote.js
  var import_jsx_runtime231 = __toESM(require_jsx_runtime());
  var import_primitives231 = __toESM(require_primitives());
  var quote_default = /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(import_primitives231.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime231.jsx)(import_primitives231.Path, { d: "M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z" }) });

  // packages/icons/build-module/library/receipt.js
  var import_jsx_runtime232 = __toESM(require_jsx_runtime());
  var import_primitives232 = __toESM(require_primitives());
  var receipt_default = /* @__PURE__ */ (0, import_jsx_runtime232.jsx)(import_primitives232.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime232.jsx)(
    import_primitives232.Path,
    {
      fillRule: "evenodd",
      d: "M16.83 6.342l.602.3.625-.25.443-.176v12.569l-.443-.178-.625-.25-.603.301-1.444.723-2.41-.804-.475-.158-.474.158-2.41.803-1.445-.722-.603-.3-.625.25-.443.177V6.215l.443.178.625.25.603-.301 1.444-.722 2.41.803.475.158.474-.158 2.41-.803 1.445.722zM20 4l-1.5.6-1 .4-2-1-3 1-3-1-2 1-1-.4L5 4v17l1.5-.6 1-.4 2 1 3-1 3 1 2-1 1 .4 1.5.6V4zm-3.5 6.25v-1.5h-8v1.5h8zm0 3v-1.5h-8v1.5h8zm-8 3v-1.5h8v1.5h-8z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/redo.js
  var import_jsx_runtime233 = __toESM(require_jsx_runtime());
  var import_primitives233 = __toESM(require_primitives());
  var redo_default = /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(import_primitives233.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime233.jsx)(import_primitives233.Path, { d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z" }) });

  // packages/icons/build-module/library/remove-bug.js
  var import_jsx_runtime234 = __toESM(require_jsx_runtime());
  var import_primitives234 = __toESM(require_primitives());
  var remove_bug_default = /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(import_primitives234.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime234.jsx)(import_primitives234.Path, { d: "M8.45474 21.2069L16.4547 3.7069L15.5453 3.29114L14.2837 6.05081C13.5991 5.69873 12.8228 5.49999 12 5.49999C10.9385 5.49999 9.95431 5.83076 9.1448 6.39485L7.18994 4.44L6.12928 5.50066L8.05556 7.42694C7.49044 8.15127 7.12047 9.0353 7.02469 9.99999H5V11.5H7V13H5V14.5H7.10002C7.35089 15.7359 8.0576 16.8062 9.03703 17.5279L7.54526 20.7911L8.45474 21.2069ZM9.68024 16.1209C8.95633 15.4796 8.5 14.5431 8.5 13.5V10.5C8.5 8.567 10.067 6.99999 12 6.99999C12.6003 6.99999 13.1653 7.15111 13.659 7.41738L9.68024 16.1209ZM15.3555 9.50155L16.1645 7.73191C16.6053 8.39383 16.8926 9.16683 16.9753 9.99999H19V11.5H17V13H19V14.5H16.9C16.4367 16.7822 14.419 18.5 12 18.5C11.7508 18.5 11.5058 18.4818 11.2664 18.4466L11.928 16.9993C11.9519 16.9998 11.9759 17 12 17C13.933 17 15.5 15.433 15.5 13.5V10.5C15.5 10.1531 15.4495 9.81794 15.3555 9.50155Z" }) });

  // packages/icons/build-module/library/remove-submenu.js
  var import_jsx_runtime235 = __toESM(require_jsx_runtime());
  var import_primitives235 = __toESM(require_primitives());
  var remove_submenu_default = /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(import_primitives235.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime235.jsx)(
    import_primitives235.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m13.955 20.748 8-17.5-.91-.416L19.597 6H13.5v1.5h5.411l-1.6 3.5H13.5v1.5h3.126l-1.6 3.5H13.5l.028 1.5h.812l-1.295 2.832.91.416ZM17.675 16l-.686 1.5h4.539L21.5 16h-3.825Zm2.286-5-.686 1.5H21.5V11h-1.54ZM2 12c0 3.58 2.42 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.48 0-4.5-1.52-4.5-4S5.52 7.5 8 7.5h3.5V6H8c-3.58 0-6 2.42-6 6Z"
    }
  ) });

  // packages/icons/build-module/library/replace.js
  var import_jsx_runtime236 = __toESM(require_jsx_runtime());
  var import_primitives236 = __toESM(require_primitives());
  var replace_default = /* @__PURE__ */ (0, import_jsx_runtime236.jsx)(import_primitives236.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime236.jsx)(import_primitives236.Path, { d: "M16 10h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1zm-8 4H4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm10-2.6L14.5 15l1.1 1.1 1.7-1.7c-.1 1.1-.3 2.3-.9 2.9-.3.3-.7.5-1.3.5h-4.5v1.5H15c.9 0 1.7-.3 2.3-.9 1-1 1.3-2.7 1.4-4l1.8 1.8 1.1-1.1-3.6-3.7zM6.8 9.7c.1-1.1.3-2.3.9-2.9.4-.4.8-.6 1.3-.6h4.5V4.8H9c-.9 0-1.7.3-2.3.9-1 1-1.3 2.7-1.4 4L3.5 8l-1 1L6 12.6 9.5 9l-1-1-1.7 1.7z" }) });

  // packages/icons/build-module/library/reset.js
  var import_jsx_runtime237 = __toESM(require_jsx_runtime());
  var import_primitives237 = __toESM(require_primitives());
  var reset_default = /* @__PURE__ */ (0, import_jsx_runtime237.jsx)(import_primitives237.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime237.jsx)(import_primitives237.Path, { d: "M7 11.5h10V13H7z" }) });

  // packages/icons/build-module/library/resize-corner-n-e.js
  var import_jsx_runtime238 = __toESM(require_jsx_runtime());
  var import_primitives238 = __toESM(require_primitives());
  var resize_corner_n_e_default = /* @__PURE__ */ (0, import_jsx_runtime238.jsx)(import_primitives238.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime238.jsx)(import_primitives238.Path, { d: "M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z" }) });

  // packages/icons/build-module/library/reusable-block.js
  var import_jsx_runtime239 = __toESM(require_jsx_runtime());
  var import_primitives239 = __toESM(require_primitives());
  var reusable_block_default = /* @__PURE__ */ (0, import_jsx_runtime239.jsx)(import_primitives239.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime239.jsx)(import_primitives239.Path, { d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z" }) });

  // packages/icons/build-module/library/rotate-left.js
  var import_jsx_runtime240 = __toESM(require_jsx_runtime());
  var import_primitives240 = __toESM(require_primitives());
  var rotate_left_default = /* @__PURE__ */ (0, import_jsx_runtime240.jsx)(import_primitives240.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime240.jsx)(import_primitives240.Path, { d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z" }) });

  // packages/icons/build-module/library/rotate-right.js
  var import_jsx_runtime241 = __toESM(require_jsx_runtime());
  var import_primitives241 = __toESM(require_primitives());
  var rotate_right_default = /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(import_primitives241.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime241.jsx)(import_primitives241.Path, { d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z" }) });

  // packages/icons/build-module/library/row.js
  var import_jsx_runtime242 = __toESM(require_jsx_runtime());
  var import_primitives242 = __toESM(require_primitives());
  var row_default = /* @__PURE__ */ (0, import_jsx_runtime242.jsx)(import_primitives242.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime242.jsx)(import_primitives242.Path, { d: "M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z" }) });

  // packages/icons/build-module/library/rss.js
  var import_jsx_runtime243 = __toESM(require_jsx_runtime());
  var import_primitives243 = __toESM(require_primitives());
  var rss_default = /* @__PURE__ */ (0, import_jsx_runtime243.jsx)(import_primitives243.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime243.jsx)(import_primitives243.Path, { d: "M5 10.2h-.8v1.5H5c1.9 0 3.8.8 5.1 2.1 1.4 1.4 2.1 3.2 2.1 5.1v.8h1.5V19c0-2.3-.9-4.5-2.6-6.2-1.6-1.6-3.8-2.6-6.1-2.6zm10.4-1.6C12.6 5.8 8.9 4.2 5 4.2h-.8v1.5H5c3.5 0 6.9 1.4 9.4 3.9s3.9 5.8 3.9 9.4v.8h1.5V19c0-3.9-1.6-7.6-4.4-10.4zM4 20h3v-3H4v3z" }) });

  // packages/icons/build-module/library/scheduled.js
  var import_jsx_runtime244 = __toESM(require_jsx_runtime());
  var import_primitives244 = __toESM(require_primitives());
  var scheduled_default = /* @__PURE__ */ (0, import_jsx_runtime244.jsx)(import_primitives244.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime244.jsx)(
    import_primitives244.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9 1V8h-1.5v3.5h-2V13H13Z"
    }
  ) });

  // packages/icons/build-module/library/search.js
  var import_jsx_runtime245 = __toESM(require_jsx_runtime());
  var import_primitives245 = __toESM(require_primitives());
  var search_default = /* @__PURE__ */ (0, import_jsx_runtime245.jsx)(import_primitives245.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime245.jsx)(import_primitives245.Path, { d: "M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" }) });

  // packages/icons/build-module/library/seen.js
  var import_jsx_runtime246 = __toESM(require_jsx_runtime());
  var import_primitives246 = __toESM(require_primitives());
  var seen_default = /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(import_primitives246.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime246.jsx)(import_primitives246.Path, { d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z" }) });

  // packages/icons/build-module/library/send.js
  var import_jsx_runtime247 = __toESM(require_jsx_runtime());
  var import_primitives247 = __toESM(require_primitives());
  var send_default = /* @__PURE__ */ (0, import_jsx_runtime247.jsx)(import_primitives247.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime247.jsx)(
    import_primitives247.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.332 5.748c-1.03-.426-2.06.607-1.632 1.636l1.702 3.93 7.481.575c.123.01.123.19 0 .2l-7.483.575-1.7 3.909c-.429 1.029.602 2.062 1.632 1.636l12.265-5.076c1.03-.426 1.03-1.884 0-2.31L6.332 5.748Z"
    }
  ) });

  // packages/icons/build-module/library/separator.js
  var import_jsx_runtime248 = __toESM(require_jsx_runtime());
  var import_primitives248 = __toESM(require_primitives());
  var separator_default = /* @__PURE__ */ (0, import_jsx_runtime248.jsx)(import_primitives248.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime248.jsx)(import_primitives248.Path, { d: "M4.5 12.5v4H3V7h1.5v3.987h15V7H21v9.5h-1.5v-4h-15Z" }) });

  // packages/icons/build-module/library/settings.js
  var import_jsx_runtime249 = __toESM(require_jsx_runtime());
  var import_primitives249 = __toESM(require_primitives());
  var settings_default = /* @__PURE__ */ (0, import_jsx_runtime249.jsxs)(import_primitives249.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime249.jsx)(import_primitives249.Path, { d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z" }),
    /* @__PURE__ */ (0, import_jsx_runtime249.jsx)(import_primitives249.Path, { d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z" })
  ] });

  // packages/icons/build-module/library/shadow.js
  var import_jsx_runtime250 = __toESM(require_jsx_runtime());
  var import_primitives250 = __toESM(require_primitives());
  var shadow_default = /* @__PURE__ */ (0, import_jsx_runtime250.jsx)(import_primitives250.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime250.jsx)(import_primitives250.Path, { d: "M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM12.8 3h-1.5v3h1.5V3zm-1.6 18h1.5v-3h-1.5v3zm6.8-9.8v1.5h3v-1.5h-3zm-12 0H3v1.5h3v-1.5zm9.7 5.6 2.1 2.1 1.1-1.1-2.1-2.1-1.1 1.1zM8.3 7.2 6.2 5.1 5.1 6.2l2.1 2.1 1.1-1.1zM5.1 17.8l1.1 1.1 2.1-2.1-1.1-1.1-2.1 2.1zM18.9 6.2l-1.1-1.1-2.1 2.1 1.1 1.1 2.1-2.1z" }) });

  // packages/icons/build-module/library/share.js
  var import_jsx_runtime251 = __toESM(require_jsx_runtime());
  var import_primitives251 = __toESM(require_primitives());
  var share_default = /* @__PURE__ */ (0, import_jsx_runtime251.jsx)(import_primitives251.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime251.jsx)(import_primitives251.Path, { d: "M9 11.8l6.1-4.5c.1.4.4.7.9.7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.4l-6.4 4.8c-.2-.1-.4-.2-.6-.2H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.2 0 .4-.1.6-.2l6.4 4.8v.4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.5 0-.8.3-.9.7L9 12.2v-.4z" }) });

  // packages/icons/build-module/library/shield.js
  var import_jsx_runtime252 = __toESM(require_jsx_runtime());
  var import_primitives252 = __toESM(require_primitives());
  var shield_default = /* @__PURE__ */ (0, import_jsx_runtime252.jsx)(import_primitives252.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime252.jsx)(
    import_primitives252.Path,
    {
      d: "M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/shipping.js
  var import_jsx_runtime253 = __toESM(require_jsx_runtime());
  var import_primitives253 = __toESM(require_primitives());
  var shipping_default = /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(import_primitives253.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime253.jsx)(import_primitives253.Path, { d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z" }) });

  // packages/icons/build-module/library/shortcode.js
  var import_jsx_runtime254 = __toESM(require_jsx_runtime());
  var import_primitives254 = __toESM(require_primitives());
  var shortcode_default = /* @__PURE__ */ (0, import_jsx_runtime254.jsx)(import_primitives254.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime254.jsx)(import_primitives254.Path, { d: "M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z" }) });

  // packages/icons/build-module/library/shuffle.js
  var import_jsx_runtime255 = __toESM(require_jsx_runtime());
  var import_primitives255 = __toESM(require_primitives());
  var shuffle_default = /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(import_primitives255.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/SVG", children: /* @__PURE__ */ (0, import_jsx_runtime255.jsx)(import_primitives255.Path, { d: "M17.192 6.75L15.47 5.03l1.06-1.06 3.537 3.53-3.537 3.53-1.06-1.06 1.723-1.72h-3.19c-.602 0-.993.202-1.28.498-.309.319-.538.792-.695 1.383-.13.488-.222 1.023-.296 1.508-.034.664-.116 1.413-.303 2.117-.193.721-.513 1.467-1.068 2.04-.575.594-1.359.954-2.357.954H4v-1.5h4.003c.601 0 .993-.202 1.28-.498.308-.319.538-.792.695-1.383.149-.557.216-1.093.288-1.662l.039-.31a9.653 9.653 0 0 1 .272-1.653c.193-.722.513-1.467 1.067-2.04.576-.594 1.36-.954 2.358-.954h3.19zM8.004 6.75c.8 0 1.46.23 1.988.628a6.24 6.24 0 0 0-.684 1.396 1.725 1.725 0 0 0-.024-.026c-.287-.296-.679-.498-1.28-.498H4v-1.5h4.003zM12.699 14.726c-.161.459-.38.94-.684 1.396.527.397 1.188.628 1.988.628h3.19l-1.722 1.72 1.06 1.06L20.067 16l-3.537-3.53-1.06 1.06 1.723 1.72h-3.19c-.602 0-.993-.202-1.28-.498a1.96 1.96 0 0 1-.024-.026z" }) });

  // packages/icons/build-module/library/sidebar.js
  var import_jsx_runtime256 = __toESM(require_jsx_runtime());
  var import_primitives256 = __toESM(require_primitives());
  var sidebar_default = /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(import_primitives256.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime256.jsx)(import_primitives256.Path, { d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" }) });

  // packages/icons/build-module/library/sides-all.js
  var import_jsx_runtime257 = __toESM(require_jsx_runtime());
  var import_primitives257 = __toESM(require_primitives());
  var sides_all_default = /* @__PURE__ */ (0, import_jsx_runtime257.jsx)(import_primitives257.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime257.jsx)(import_primitives257.Path, { d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z" }) });

  // packages/icons/build-module/library/sides-axial.js
  var import_jsx_runtime258 = __toESM(require_jsx_runtime());
  var import_primitives258 = __toESM(require_primitives());
  var sides_axial_default = /* @__PURE__ */ (0, import_jsx_runtime258.jsx)(import_primitives258.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime258.jsx)(
    import_primitives258.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.2 5.3h8V3.8h-8v1.5zm0 14.5h8v-1.5h-8v1.5zm3.5-6.5h1v-1h-1v1zm1-6.5h-1v.5h1v-.5zm-1 4.5h1v-1h-1v1zm0-2h1v-1h-1v1zm0 7.5h1v-.5h-1v.5zm1-2.5h-1v1h1v-1zm-8.5 1.5h1.5v-8H4.2v8zm14.5-8v8h1.5v-8h-1.5zm-5 4.5v-1h-1v1h1zm-6.5 0h.5v-1h-.5v1zm3.5-1v1h1v-1h-1zm6 1h.5v-1h-.5v1zm-8-1v1h1v-1h-1zm6 0v1h1v-1h-1z"
    }
  ) });

  // packages/icons/build-module/library/sides-bottom.js
  var import_jsx_runtime259 = __toESM(require_jsx_runtime());
  var import_primitives259 = __toESM(require_primitives());
  var sides_bottom_default = /* @__PURE__ */ (0, import_jsx_runtime259.jsxs)(import_primitives259.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime259.jsx)(
      import_primitives259.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime259.jsx)(import_primitives259.Path, { d: "m16.5 19.5h-9v-1.5h9z" })
  ] });

  // packages/icons/build-module/library/sides-horizontal.js
  var import_jsx_runtime260 = __toESM(require_jsx_runtime());
  var import_primitives260 = __toESM(require_primitives());
  var sides_horizontal_default = /* @__PURE__ */ (0, import_jsx_runtime260.jsxs)(import_primitives260.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime260.jsx)(
      import_primitives260.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime260.jsx)(import_primitives260.Path, { d: "m4.5 7.5v9h1.5v-9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime260.jsx)(import_primitives260.Path, { d: "m18 7.5v9h1.5v-9z" })
  ] });

  // packages/icons/build-module/library/sides-left.js
  var import_jsx_runtime261 = __toESM(require_jsx_runtime());
  var import_primitives261 = __toESM(require_primitives());
  var sides_left_default = /* @__PURE__ */ (0, import_jsx_runtime261.jsxs)(import_primitives261.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime261.jsx)(
      import_primitives261.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime261.jsx)(import_primitives261.Path, { d: "m4.5 16.5v-9h1.5v9z" })
  ] });

  // packages/icons/build-module/library/sides-right.js
  var import_jsx_runtime262 = __toESM(require_jsx_runtime());
  var import_primitives262 = __toESM(require_primitives());
  var sides_right_default = /* @__PURE__ */ (0, import_jsx_runtime262.jsxs)(import_primitives262.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime262.jsx)(
      import_primitives262.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime262.jsx)(import_primitives262.Path, { d: "m18 16.5v-9h1.5v9z" })
  ] });

  // packages/icons/build-module/library/sides-top.js
  var import_jsx_runtime263 = __toESM(require_jsx_runtime());
  var import_primitives263 = __toESM(require_primitives());
  var sides_top_default = /* @__PURE__ */ (0, import_jsx_runtime263.jsxs)(import_primitives263.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime263.jsx)(
      import_primitives263.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime263.jsx)(import_primitives263.Path, { d: "m16.5 6h-9v-1.5h9z" })
  ] });

  // packages/icons/build-module/library/sides-vertical.js
  var import_jsx_runtime264 = __toESM(require_jsx_runtime());
  var import_primitives264 = __toESM(require_primitives());
  var sides_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime264.jsxs)(import_primitives264.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime264.jsx)(
      import_primitives264.Path,
      {
        d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
        style: { opacity: 0.25 }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime264.jsx)(import_primitives264.Path, { d: "m7.5 6h9v-1.5h-9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime264.jsx)(import_primitives264.Path, { d: "m7.5 19.5h9v-1.5h-9z" })
  ] });

  // packages/icons/build-module/library/site-logo.js
  var import_jsx_runtime265 = __toESM(require_jsx_runtime());
  var import_primitives265 = __toESM(require_primitives());
  var site_logo_default = /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(import_primitives265.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime265.jsx)(import_primitives265.Path, { d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 1.5c3.4 0 6.2 2.7 6.5 6l-1.2-.6-.8-.4c-.1 0-.2 0-.3-.1H16c-.1-.2-.4-.2-.7 0l-2.9 2.1L9 11.3h-.7L5.5 13v-1.1c0-3.6 2.9-6.5 6.5-6.5Zm0 13c-2.7 0-5-1.7-6-4l2.8-1.7 3.5 1.2h.4s.2 0 .4-.2l2.9-2.1.4.2c.6.3 1.4.7 2.1 1.1-.5 3.1-3.2 5.4-6.4 5.4Z" }) });

  // packages/icons/build-module/library/square.js
  var import_jsx_runtime266 = __toESM(require_jsx_runtime());
  var import_primitives266 = __toESM(require_primitives());
  var square_default = /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(import_primitives266.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime266.jsx)(
    import_primitives266.Path,
    {
      fill: "none",
      d: "M5.75 12.75V18.25H11.25M12.75 5.75H18.25V11.25",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "square"
    }
  ) });

  // packages/icons/build-module/library/stack.js
  var import_jsx_runtime267 = __toESM(require_jsx_runtime());
  var import_primitives267 = __toESM(require_primitives());
  var stack_default = /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(import_primitives267.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime267.jsx)(import_primitives267.Path, { d: "M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z" }) });

  // packages/icons/build-module/library/star-empty.js
  var import_jsx_runtime268 = __toESM(require_jsx_runtime());
  var import_primitives268 = __toESM(require_primitives());
  var star_empty_default = /* @__PURE__ */ (0, import_jsx_runtime268.jsx)(import_primitives268.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime268.jsx)(
    import_primitives268.Path,
    {
      fillRule: "evenodd",
      d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/star-filled.js
  var import_jsx_runtime269 = __toESM(require_jsx_runtime());
  var import_primitives269 = __toESM(require_primitives());
  var star_filled_default = /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(import_primitives269.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime269.jsx)(import_primitives269.Path, { d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z" }) });

  // packages/icons/build-module/library/star-half.js
  var import_jsx_runtime270 = __toESM(require_jsx_runtime());
  var import_primitives270 = __toESM(require_primitives());
  var star_half_default = /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(import_primitives270.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime270.jsx)(import_primitives270.Path, { d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z" }) });

  // packages/icons/build-module/library/store.js
  var import_jsx_runtime271 = __toESM(require_jsx_runtime());
  var import_primitives271 = __toESM(require_primitives());
  var store_default = /* @__PURE__ */ (0, import_jsx_runtime271.jsx)(import_primitives271.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime271.jsx)(
    import_primitives271.Path,
    {
      fillRule: "evenodd",
      d: "M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",
      clipRule: "evenodd"
    }
  ) });

  // packages/icons/build-module/library/stretch-full-width.js
  var import_jsx_runtime272 = __toESM(require_jsx_runtime());
  var import_primitives272 = __toESM(require_primitives());
  var stretch_full_width_default = /* @__PURE__ */ (0, import_jsx_runtime272.jsx)(import_primitives272.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime272.jsx)(import_primitives272.Path, { d: "M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z" }) });

  // packages/icons/build-module/library/stretch-wide.js
  var import_jsx_runtime273 = __toESM(require_jsx_runtime());
  var import_primitives273 = __toESM(require_primitives());
  var stretch_wide_default = /* @__PURE__ */ (0, import_jsx_runtime273.jsx)(import_primitives273.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime273.jsx)(import_primitives273.Path, { d: "M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z" }) });

  // packages/icons/build-module/library/styles.js
  var import_jsx_runtime274 = __toESM(require_jsx_runtime());
  var import_primitives274 = __toESM(require_primitives());
  var styles_default = /* @__PURE__ */ (0, import_jsx_runtime274.jsx)(import_primitives274.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime274.jsx)(
    import_primitives274.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 0 1-6.5 6.5v-13a6.5 6.5 0 0 1 6.5 6.5Z"
    }
  ) });

  // packages/icons/build-module/library/subscript.js
  var import_jsx_runtime275 = __toESM(require_jsx_runtime());
  var import_primitives275 = __toESM(require_primitives());
  var subscript_default = /* @__PURE__ */ (0, import_jsx_runtime275.jsx)(import_primitives275.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime275.jsx)(import_primitives275.Path, { d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z" }) });

  // packages/icons/build-module/library/superscript.js
  var import_jsx_runtime276 = __toESM(require_jsx_runtime());
  var import_primitives276 = __toESM(require_primitives());
  var superscript_default = /* @__PURE__ */ (0, import_jsx_runtime276.jsx)(import_primitives276.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime276.jsx)(import_primitives276.Path, { d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z" }) });

  // packages/icons/build-module/library/swatch.js
  var import_jsx_runtime277 = __toESM(require_jsx_runtime());
  var import_primitives277 = __toESM(require_primitives());
  var swatch_default = /* @__PURE__ */ (0, import_jsx_runtime277.jsx)(import_primitives277.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime277.jsx)(import_primitives277.Path, { d: "M7.1 5.7 8 6.9c.4-.3.9-.6 1.5-.8l-.6-1.4c-.7.3-1.3.6-1.8 1ZM4.6 8.9l1.4.6c.2-.5.5-1 .8-1.5l-1.2-.9c-.4.6-.8 1.2-1 1.8Zm14.8 0c-.3-.7-.6-1.3-1-1.8l-1.2.9c.3.4.6.9.8 1.5l1.4-.6ZM7.1 18.3c.6.4 1.2.8 1.8 1l.6-1.4c-.5-.2-1-.5-1.5-.8l-.9 1.2ZM5.5 12v-.9h-.7l-.7-.2v2l1.5-.2v-.9Zm-.7 3h-.2c.3.7.6 1.3 1 1.9l1.2-.9c-.3-.4-.6-.9-.8-1.5l-1.2.5Zm9.7 3 .5 1.2v.2c.7-.3 1.3-.6 1.9-1l-.9-1.2c-.4.3-.9.6-1.5.8Zm-2.5.5h-.9l-.2 1.3v.2h2l-.2-1.5h-.9Zm7.9-7.5-1.5.2V13h.7l.7.2v-2ZM18 14.5c-.2.5-.5 1-.8 1.5l1.2.9c.4-.6.8-1.2 1-1.8h-.2l-1.2-.6ZM11 4.1l.2 1.5H13V4.2h-1.9ZM14.5 6c.5.2 1 .5 1.5.8l.9-1.2c-.6-.4-1.2-.8-1.8-1L14.5 6Z" }) });

  // packages/icons/build-module/library/symbol-filled.js
  var import_jsx_runtime278 = __toESM(require_jsx_runtime());
  var import_primitives278 = __toESM(require_primitives());
  var symbol_filled_default = /* @__PURE__ */ (0, import_jsx_runtime278.jsx)(import_primitives278.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime278.jsx)(import_primitives278.Path, { d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z" }) });

  // packages/icons/build-module/library/symbol.js
  var import_jsx_runtime279 = __toESM(require_jsx_runtime());
  var import_primitives279 = __toESM(require_primitives());
  var symbol_default = /* @__PURE__ */ (0, import_jsx_runtime279.jsx)(import_primitives279.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime279.jsx)(import_primitives279.Path, { d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z" }) });

  // packages/icons/build-module/library/table-column-after.js
  var import_jsx_runtime280 = __toESM(require_jsx_runtime());
  var import_primitives280 = __toESM(require_primitives());
  var table_column_after_default = /* @__PURE__ */ (0, import_jsx_runtime280.jsx)(import_primitives280.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime280.jsx)(import_primitives280.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14.2c.1.9.9 1.7 1.8 1.8H19.2c1-.1 1.8-1 1.8-2V5c0-1.1-.9-2-2-2ZM8.5 19.5H5c-.3 0-.5-.2-.5-.5v-3.5h4v4Zm0-5.5h-4v-4h4v4Zm0-5.5h-4V5c0-.3.2-.5.5-.5h3.5v4Zm11 10.5c0 .3-.2.5-.5.5h-9v-15h9c.3 0 .5.2.5.5v14Zm-4-10.8H14v3h-3v1.5h3v3h1.5v-3h3v-1.5h-3v-3Z" }) });

  // packages/icons/build-module/library/table-column-before.js
  var import_jsx_runtime281 = __toESM(require_jsx_runtime());
  var import_primitives281 = __toESM(require_primitives());
  var table_column_before_default = /* @__PURE__ */ (0, import_jsx_runtime281.jsx)(import_primitives281.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime281.jsx)(import_primitives281.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1 .8 1.9 1.8 2H19.2c.9-.1 1.7-.9 1.8-1.8V5c0-1.1-.9-2-2-2Zm-5 16.5H5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h9v15Zm5.5-.5c0 .3-.2.5-.5.5h-3.5v-4h4V19Zm0-5h-4v-4h4v4Zm0-5.5h-4v-4H19c.3 0 .5.2.5.5v3.5Zm-11 7.3H10v-3h3v-1.5h-3v-3H8.5v3h-3v1.5h3v3Z" }) });

  // packages/icons/build-module/library/table-column-delete.js
  var import_jsx_runtime282 = __toESM(require_jsx_runtime());
  var import_primitives282 = __toESM(require_primitives());
  var table_column_delete_default = /* @__PURE__ */ (0, import_jsx_runtime282.jsx)(import_primitives282.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime282.jsx)(import_primitives282.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14.2c.1.9.9 1.7 1.8 1.8H19.2c1-.1 1.8-1 1.8-2V5c0-1.1-.9-2-2-2ZM8.5 19.5H5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h3.5v15Zm11-.5c0 .3-.2.5-.5.5h-9v-15h9c.3 0 .5.2.5.5v14ZM16.9 8.8l-2.1 2.1-2.1-2.1-1.1 1.1 2.1 2.1-2.1 2.1 1.1 1.1 2.1-2.1 2.1 2.1 1.1-1.1-2.1-2.1L18 9.9l-1.1-1.1Z" }) });

  // packages/icons/build-module/library/table-of-contents.js
  var import_jsx_runtime283 = __toESM(require_jsx_runtime());
  var import_primitives283 = __toESM(require_primitives());
  var table_of_contents_default = /* @__PURE__ */ (0, import_jsx_runtime283.jsxs)(import_primitives283.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime283.jsx)(
      import_primitives283.Path,
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 9.484h-8.889v-1.5H20v1.5Zm0 7h-4.889v-1.5H20v1.5Zm-14 .032a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime283.jsx)(import_primitives283.Path, { d: "M13 15.516a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 8.484a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" })
  ] });

  // packages/icons/build-module/library/table-row-after.js
  var import_jsx_runtime284 = __toESM(require_jsx_runtime());
  var import_primitives284 = __toESM(require_primitives());
  var table_row_after_default = /* @__PURE__ */ (0, import_jsx_runtime284.jsx)(import_primitives284.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime284.jsx)(import_primitives284.Path, { d: "M19 3H4.8c-.9.1-1.7.9-1.8 1.8V19.2c.1 1 1 1.8 2 1.8h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-9 1.5h4v4h-4v-4ZM4.5 5c0-.3.2-.5.5-.5h3.5v4h-4V5Zm15 14c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-9h15v9Zm0-10.5h-4v-4H19c.3 0 .5.2.5.5v3.5Zm-8.3 10h1.5v-3h3V14h-3v-3h-1.5v3h-3v1.5h3v3Z" }) });

  // packages/icons/build-module/library/table-row-before.js
  var import_jsx_runtime285 = __toESM(require_jsx_runtime());
  var import_primitives285 = __toESM(require_primitives());
  var table_row_before_default = /* @__PURE__ */ (0, import_jsx_runtime285.jsx)(import_primitives285.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime285.jsx)(import_primitives285.Path, { d: "M21 5c0-1.1-.9-2-2-2H5c-1 0-1.9.8-2 1.8V19.2c.1.9.9 1.7 1.8 1.8H19c1.1 0 2-.9 2-2V5ZM4.5 14V5c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v9h-15Zm4 5.5H5c-.3 0-.5-.2-.5-.5v-3.5h4v4Zm5.5 0h-4v-4h4v4Zm5.5-.5c0 .3-.2.5-.5.5h-3.5v-4h4V19ZM11.2 10h-3V8.5h3v-3h1.5v3h3V10h-3v3h-1.5v-3Z" }) });

  // packages/icons/build-module/library/table-row-delete.js
  var import_jsx_runtime286 = __toESM(require_jsx_runtime());
  var import_primitives286 = __toESM(require_primitives());
  var table_row_delete_default = /* @__PURE__ */ (0, import_jsx_runtime286.jsx)(import_primitives286.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime286.jsx)(import_primitives286.Path, { d: "M19 3H4.8c-.9.1-1.7.9-1.8 1.8V19.2c.1 1 1 1.8 2 1.8h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-9h15v9Zm0-10.5h-15V5c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v3.5Zm-9.6 9.4 2.1-2.1 2.1 2.1 1.1-1.1-2.1-2.1 2.1-2.1-1.1-1.1-2.1 2.1-2.1-2.1-1.1 1.1 2.1 2.1-2.1 2.1 1.1 1.1Z" }) });

  // packages/icons/build-module/library/table.js
  var import_jsx_runtime287 = __toESM(require_jsx_runtime());
  var import_primitives287 = __toESM(require_primitives());
  var table_default = /* @__PURE__ */ (0, import_jsx_runtime287.jsx)(import_primitives287.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime287.jsx)(import_primitives287.Path, { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm.5 2v6.2h-6.8V4.4h6.2c.3 0 .5.2.5.5ZM5 4.5h6.2v6.8H4.4V5.1c0-.3.2-.5.5-.5ZM4.5 19v-6.2h6.8v6.8H5.1c-.3 0-.5-.2-.5-.5Zm14.5.5h-6.2v-6.8h6.8v6.2c0 .3-.2.5-.5.5Z" }) });

  // packages/icons/build-module/library/tablet.js
  var import_jsx_runtime288 = __toESM(require_jsx_runtime());
  var import_primitives288 = __toESM(require_primitives());
  var tablet_default = /* @__PURE__ */ (0, import_jsx_runtime288.jsx)(import_primitives288.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime288.jsx)(import_primitives288.Path, { d: "M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z" }) });

  // packages/icons/build-module/library/tag.js
  var import_jsx_runtime289 = __toESM(require_jsx_runtime());
  var import_primitives289 = __toESM(require_primitives());
  var tag_default = /* @__PURE__ */ (0, import_jsx_runtime289.jsx)(import_primitives289.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime289.jsx)(import_primitives289.Path, { d: "M4.75 4a.75.75 0 0 0-.75.75v7.826c0 .2.08.39.22.53l6.72 6.716a2.313 2.313 0 0 0 3.276-.001l5.61-5.611-.531-.53.532.528a2.315 2.315 0 0 0 0-3.264L13.104 4.22a.75.75 0 0 0-.53-.22H4.75ZM19 12.576a.815.815 0 0 1-.236.574l-5.61 5.611a.814.814 0 0 1-1.153 0L5.5 12.264V5.5h6.763l6.5 6.502a.816.816 0 0 1 .237.574ZM8.75 9.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }) });

  // packages/icons/build-module/library/term-description.js
  var import_jsx_runtime290 = __toESM(require_jsx_runtime());
  var import_primitives290 = __toESM(require_primitives());
  var term_description_default = /* @__PURE__ */ (0, import_jsx_runtime290.jsx)(import_primitives290.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime290.jsx)(import_primitives290.Path, { d: "M6.08 10.103h2.914L9.657 12h1.417L8.23 4H6.846L4 12h1.417l.663-1.897Zm1.463-4.137.994 2.857h-2l1.006-2.857ZM11 16H4v-1.5h7V16Zm1 0h8v-1.5h-8V16Zm-4 4H4v-1.5h4V20Zm7-1.5V20H9v-1.5h6Z" }) });

  // packages/icons/build-module/library/term-name.js
  var import_jsx_runtime291 = __toESM(require_jsx_runtime());
  var import_primitives291 = __toESM(require_primitives());
  var term_name_default = /* @__PURE__ */ (0, import_jsx_runtime291.jsxs)(import_primitives291.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime291.jsx)(import_primitives291.Path, { d: "m14.95 13.889-1.061 1.061-5.552-5.553 1.06-1.06 5.552 5.552Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime291.jsx)(import_primitives291.Path, { d: "M12.574 4a.75.75 0 0 1 .53.22l6.723 6.724a2.315 2.315 0 0 1 0 3.264l-.532-.528.531.53-5.61 5.611a2.31 2.31 0 0 1-3.276.001l-6.72-6.716a.75.75 0 0 1-.22-.53V4.75A.75.75 0 0 1 4.75 4h7.824ZM5.5 5.5v6.764l6.501 6.497a.817.817 0 0 0 .889.178.816.816 0 0 0 .264-.178l5.61-5.61a.816.816 0 0 0-.001-1.149l-6.5-6.502H5.5Z" })
  ] });

  // packages/icons/build-module/library/text-color.js
  var import_jsx_runtime292 = __toESM(require_jsx_runtime());
  var import_primitives292 = __toESM(require_primitives());
  var text_color_default = /* @__PURE__ */ (0, import_jsx_runtime292.jsx)(import_primitives292.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime292.jsx)(import_primitives292.Path, { d: "M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z" }) });

  // packages/icons/build-module/library/text-horizontal.js
  var import_jsx_runtime293 = __toESM(require_jsx_runtime());
  var import_primitives293 = __toESM(require_primitives());
  var text_horizontal_default = /* @__PURE__ */ (0, import_jsx_runtime293.jsx)(import_primitives293.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime293.jsx)(import_primitives293.Path, { d: "M8.2 14.4h3.9L13 17h1.7L11 6.5H9.3L5.6 17h1.7l.9-2.6zm2-5.5 1.4 4H8.8l1.4-4zm7.4 7.5-1.3.8.8 1.4H5.5V20h14.3l-2.2-3.6z" }) });

  // packages/icons/build-module/library/text-vertical.js
  var import_jsx_runtime294 = __toESM(require_jsx_runtime());
  var import_primitives294 = __toESM(require_primitives());
  var text_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime294.jsx)(import_primitives294.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime294.jsx)(import_primitives294.Path, { d: "M7 5.6v1.7l2.6.9v3.9L7 13v1.7L17.5 11V9.3L7 5.6zm4.2 6V8.8l4 1.4-4 1.4zm-5.7 5.6V5.5H4v14.3l3.6-2.2-.8-1.3-1.3.9z" }) });

  // packages/icons/build-module/library/thumbs-down.js
  var import_jsx_runtime295 = __toESM(require_jsx_runtime());
  var import_primitives295 = __toESM(require_primitives());
  var thumbs_down_default = /* @__PURE__ */ (0, import_jsx_runtime295.jsx)(import_primitives295.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime295.jsx)(import_primitives295.Path, { d: "M19.8 4h-1.5l1 8h1.5l-1-8ZM17 5.8c-.1-1-1-1.8-2-1.8H6.8c-.9 0-1.7.6-1.9 1.4l-1.8 6C2.7 12.7 3.7 14 5 14h4.4l-.8 3.6c-.3 1.3.7 2.4 1.9 2.4h.2c.6 0 1.2-.3 1.6-.8l5-6.6c.3-.4.5-.9.4-1.5L17 5.7Zm-.9 5.9-5 6.6c0 .1-.2.2-.4.2h-.2c-.3 0-.6-.3-.5-.6l.8-3.6c.1-.4 0-.9-.3-1.3s-.7-.6-1.2-.6H4.9c-.3 0-.6-.3-.5-.6l1.8-6c0-.2.3-.4.5-.4h8.2c.3 0 .5.2.5.4l.7 5.4v.4Z" }) });

  // packages/icons/build-module/library/thumbs-up.js
  var import_jsx_runtime296 = __toESM(require_jsx_runtime());
  var import_primitives296 = __toESM(require_primitives());
  var thumbs_up_default = /* @__PURE__ */ (0, import_jsx_runtime296.jsx)(import_primitives296.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime296.jsx)(import_primitives296.Path, { d: "m3 12 1 8h1.5l-1-8H3Zm15.8-2h-4.4l.8-3.6c.3-1.3-.7-2.4-1.9-2.4h-.2c-.6 0-1.2.3-1.6.8l-5 6.6c-.3.4-.4.8-.4 1.2v.2l.7 5.4v.2c.2.9 1 1.5 1.9 1.5h8.2c.9 0 1.7-.6 1.9-1.4l1.8-6c.4-1.3-.6-2.6-1.9-2.6Zm.5 2.1-1.8 6c0 .2-.3.4-.5.4H8.8c-.3 0-.5-.2-.5-.4l-.7-5.4v-.4l5-6.6c0-.1.2-.2.4-.2h.2c.3 0 .6.3.5.6l-.8 3.6c-.1.4 0 .9.3 1.3s.7.6 1.2.6h4.4c.3 0 .6.3.5.6Z" }) });

  // packages/icons/build-module/library/tip.js
  var import_jsx_runtime297 = __toESM(require_jsx_runtime());
  var import_primitives297 = __toESM(require_primitives());
  var tip_default = /* @__PURE__ */ (0, import_jsx_runtime297.jsx)(import_primitives297.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime297.jsx)(import_primitives297.Path, { d: "M12 15.8c-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8s-3.1 6.8-6.8 6.8zm0-12C9.1 3.8 6.8 6.1 6.8 9s2.4 5.2 5.2 5.2c2.9 0 5.2-2.4 5.2-5.2S14.9 3.8 12 3.8zM8 17.5h8V19H8zM10 20.5h4V22h-4z" }) });

  // packages/icons/build-module/library/title.js
  var import_jsx_runtime298 = __toESM(require_jsx_runtime());
  var import_primitives298 = __toESM(require_primitives());
  var title_default = /* @__PURE__ */ (0, import_jsx_runtime298.jsx)(import_primitives298.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime298.jsx)(import_primitives298.Path, { d: "m4 5.5h2v6.5h1.5v-6.5h2v-1.5h-5.5zm16 10.5h-16v-1.5h16zm-7 4h-9v-1.5h9z" }) });

  // packages/icons/build-module/library/tool.js
  var import_jsx_runtime299 = __toESM(require_jsx_runtime());
  var import_primitives299 = __toESM(require_primitives());
  var tool_default = /* @__PURE__ */ (0, import_jsx_runtime299.jsx)(import_primitives299.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime299.jsx)(import_primitives299.Path, { d: "M14.103 7.128l2.26-2.26a4 4 0 00-5.207 4.804L5.828 15a2 2 0 102.828 2.828l5.329-5.328a4 4 0 004.804-5.208l-2.261 2.26-1.912-.512-.513-1.912zm-7.214 9.64a.5.5 0 11.707-.707.5.5 0 01-.707.707z" }) });

  // packages/icons/build-module/library/trash.js
  var import_jsx_runtime300 = __toESM(require_jsx_runtime());
  var import_primitives300 = __toESM(require_primitives());
  var trash_default = /* @__PURE__ */ (0, import_jsx_runtime300.jsx)(import_primitives300.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime300.jsx)(
    import_primitives300.Path,
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
    }
  ) });

  // packages/icons/build-module/library/trending-down.js
  var import_jsx_runtime301 = __toESM(require_jsx_runtime());
  var import_primitives301 = __toESM(require_primitives());
  var trending_down_default = /* @__PURE__ */ (0, import_jsx_runtime301.jsx)(import_primitives301.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime301.jsx)(import_primitives301.Path, { d: "M4.195 8.245a.75.75 0 011.06-.05l5.004 4.55 4.025-3.521L19 13.939V10.75h1.5v5.75h-5.75V15h3.19l-3.724-3.723-3.975 3.478-5.995-5.45a.75.75 0 01-.051-1.06z" }) });

  // packages/icons/build-module/library/trending-up.js
  var import_jsx_runtime302 = __toESM(require_jsx_runtime());
  var import_primitives302 = __toESM(require_primitives());
  var trending_up_default = /* @__PURE__ */ (0, import_jsx_runtime302.jsx)(import_primitives302.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime302.jsx)(import_primitives302.Path, { d: "M3.445 16.505a.75.75 0 001.06.05l5.005-4.55 4.024 3.521 4.716-4.715V14h1.5V8.25H14v1.5h3.19l-3.724 3.723L9.49 9.995l-5.995 5.45a.75.75 0 00-.05 1.06z" }) });

  // packages/icons/build-module/library/typography.js
  var import_jsx_runtime303 = __toESM(require_jsx_runtime());
  var import_primitives303 = __toESM(require_primitives());
  var typography_default = /* @__PURE__ */ (0, import_jsx_runtime303.jsx)(import_primitives303.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime303.jsx)(import_primitives303.Path, { d: "m8.6 7 3.9 10.8h-1.7l-1-2.8H5.7l-1 2.8H3L6.9 7h1.7Zm-2.4 6.6h3L7.7 9.3l-1.5 4.3ZM17.691 8.879c.473 0 .88.055 1.221.165.352.1.643.264.875.495.274.253.456.572.544.957.088.374.132.83.132 1.37v4.554c0 .274.033.472.099.593.077.11.198.166.363.166.11 0 .215-.028.313-.083.11-.055.237-.137.38-.247l.165.28a3.304 3.304 0 0 1-.71.446c-.23.11-.527.165-.89.165-.352 0-.639-.055-.858-.165-.22-.11-.386-.27-.495-.479-.1-.209-.149-.468-.149-.775-.286.462-.627.814-1.023 1.056-.396.242-.858.363-1.386.363-.462 0-.858-.088-1.188-.264a1.752 1.752 0 0 1-.742-.726 2.201 2.201 0 0 1-.248-1.056c0-.484.11-.875.33-1.172.22-.308.5-.556.841-.742.352-.187.721-.341 1.106-.462.396-.132.765-.253 1.106-.363.351-.121.637-.259.857-.413.232-.154.347-.357.347-.61V10.81c0-.396-.066-.71-.198-.941a1.05 1.05 0 0 0-.511-.511 1.763 1.763 0 0 0-.76-.149c-.253 0-.522.039-.808.116a1.165 1.165 0 0 0-.677.412 1.1 1.1 0 0 1 .595.396c.165.187.247.424.247.71 0 .307-.104.55-.313.726-.198.176-.451.263-.76.263-.34 0-.594-.104-.758-.313a1.231 1.231 0 0 1-.248-.759c0-.297.072-.539.214-.726.154-.187.352-.363.595-.528.264-.176.6-.324 1.006-.445.418-.121.88-.182 1.386-.182Zm.99 3.729a1.57 1.57 0 0 1-.528.462c-.231.121-.479.248-.742.38a5.377 5.377 0 0 0-.76.462c-.23.165-.423.38-.577.643-.154.264-.231.6-.231 1.007 0 .429.11.77.33 1.023.22.242.517.363.891.363.308 0 .594-.088.858-.264.275-.176.528-.44.759-.792v-3.284Z" }) });

  // packages/icons/build-module/library/undo.js
  var import_jsx_runtime304 = __toESM(require_jsx_runtime());
  var import_primitives304 = __toESM(require_primitives());
  var undo_default = /* @__PURE__ */ (0, import_jsx_runtime304.jsx)(import_primitives304.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime304.jsx)(import_primitives304.Path, { d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z" }) });

  // packages/icons/build-module/library/ungroup.js
  var import_jsx_runtime305 = __toESM(require_jsx_runtime());
  var import_primitives305 = __toESM(require_primitives());
  var ungroup_default = /* @__PURE__ */ (0, import_jsx_runtime305.jsx)(import_primitives305.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime305.jsx)(import_primitives305.Path, { d: "M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z" }) });

  // packages/icons/build-module/library/unlock.js
  var import_jsx_runtime306 = __toESM(require_jsx_runtime());
  var import_primitives306 = __toESM(require_primitives());
  var unlock_default = /* @__PURE__ */ (0, import_jsx_runtime306.jsx)(import_primitives306.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime306.jsx)(import_primitives306.Path, { d: "M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8h1.5c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z" }) });

  // packages/icons/build-module/library/unseen.js
  var import_jsx_runtime307 = __toESM(require_jsx_runtime());
  var import_primitives307 = __toESM(require_primitives());
  var unseen_default = /* @__PURE__ */ (0, import_jsx_runtime307.jsx)(import_primitives307.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime307.jsx)(import_primitives307.Path, { d: "M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z" }) });

  // packages/icons/build-module/library/update.js
  var import_jsx_runtime308 = __toESM(require_jsx_runtime());
  var import_primitives308 = __toESM(require_primitives());
  var update_default = /* @__PURE__ */ (0, import_jsx_runtime308.jsx)(import_primitives308.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime308.jsx)(import_primitives308.Path, { d: "m11.3 17.2-5-5c-.1-.1-.1-.3 0-.4l2.3-2.3-1.1-1-2.3 2.3c-.7.7-.7 1.8 0 2.5l5 5H7.5v1.5h5.3v-5.2h-1.5v2.6zm7.5-6.4-5-5h2.7V4.2h-5.2v5.2h1.5V6.8l5 5c.1.1.1.3 0 .4l-2.3 2.3 1.1 1.1 2.3-2.3c.6-.7.6-1.9-.1-2.5z" }) });

  // packages/icons/build-module/library/upload.js
  var import_jsx_runtime309 = __toESM(require_jsx_runtime());
  var import_primitives309 = __toESM(require_primitives());
  var upload_default = /* @__PURE__ */ (0, import_jsx_runtime309.jsx)(import_primitives309.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime309.jsx)(import_primitives309.Path, { d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z" }) });

  // packages/icons/build-module/library/verse.js
  var import_jsx_runtime310 = __toESM(require_jsx_runtime());
  var import_primitives310 = __toESM(require_primitives());
  var verse_default = /* @__PURE__ */ (0, import_jsx_runtime310.jsx)(import_primitives310.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime310.jsx)(import_primitives310.Path, { d: "M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z" }) });

  // packages/icons/build-module/library/video.js
  var import_jsx_runtime311 = __toESM(require_jsx_runtime());
  var import_primitives311 = __toESM(require_primitives());
  var video_default = /* @__PURE__ */ (0, import_jsx_runtime311.jsx)(import_primitives311.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime311.jsx)(import_primitives311.Path, { d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z" }) });

  // packages/icons/build-module/library/widget.js
  var import_jsx_runtime312 = __toESM(require_jsx_runtime());
  var import_primitives312 = __toESM(require_primitives());
  var widget_default = /* @__PURE__ */ (0, import_jsx_runtime312.jsx)(import_primitives312.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime312.jsx)(import_primitives312.Path, { d: "M6 3H8V5H16V3H18V5C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5V3ZM18 6.5H6C5.72386 6.5 5.5 6.72386 5.5 7V8H18.5V7C18.5 6.72386 18.2761 6.5 18 6.5ZM18.5 9.5H5.5V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V9.5ZM11 11H13V13H11V11ZM7 11V13H9V11H7ZM15 13V11H17V13H15Z" }) });

  // packages/icons/build-module/library/wordpress.js
  var import_jsx_runtime313 = __toESM(require_jsx_runtime());
  var import_primitives313 = __toESM(require_primitives());
  var wordpress_default = /* @__PURE__ */ (0, import_jsx_runtime313.jsx)(import_primitives313.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "-2 -2 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime313.jsx)(import_primitives313.Path, { d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z" }) });
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=index.js.map
