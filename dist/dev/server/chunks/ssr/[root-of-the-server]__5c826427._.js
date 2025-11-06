module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/store/customizer/CustomizerSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomizerSlice",
    ()=>CustomizerSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "hoverSidebar",
    ()=>hoverSidebar,
    "setBorderRadius",
    ()=>setBorderRadius,
    "setCardShadow",
    ()=>setCardShadow,
    "setDarkMode",
    ()=>setDarkMode,
    "setDir",
    ()=>setDir,
    "setLanguage",
    ()=>setLanguage,
    "setTheme",
    ()=>setTheme,
    "toggleHorizontal",
    ()=>toggleHorizontal,
    "toggleLayout",
    ()=>toggleLayout,
    "toggleMobileSidebar",
    ()=>toggleMobileSidebar,
    "toggleSidebar",
    ()=>toggleSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    activeDir: 'ltr',
    activeMode: 'light',
    activeTheme: 'BLUE_THEME',
    SidebarWidth: 250,
    MiniSidebarWidth: 87,
    TopbarHeight: 70,
    isLayout: 'full',
    isCollapse: true,
    isSidebarHover: false,
    isMobileSidebar: false,
    isHorizontal: false,
    isLanguage: 'vn',
    isCardShadow: true,
    borderRadius: 5
};
const CustomizerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'customizer',
    initialState,
    reducers: {
        setTheme: (state, action)=>{
            state.activeTheme = action.payload;
        },
        setDarkMode: (state, action)=>{
            state.activeMode = action.payload;
        },
        setDir: (state, action)=>{
            state.activeDir = action.payload;
        },
        setLanguage: (state, action)=>{
            state.isLanguage = action.payload;
        },
        setCardShadow: (state, action)=>{
            state.isCardShadow = action.payload;
        },
        toggleSidebar: (state)=>{
            state.isCollapse = !state.isCollapse;
        },
        hoverSidebar: (state, action)=>{
            state.isSidebarHover = action.payload;
        },
        toggleMobileSidebar: (state)=>{
            state.isMobileSidebar = !state.isMobileSidebar;
        },
        toggleLayout: (state, action)=>{
            state.isLayout = action.payload;
        },
        toggleHorizontal: (state, action)=>{
            state.isHorizontal = action.payload;
        },
        setBorderRadius: (state, action)=>{
            state.borderRadius = action.payload;
        }
    }
});
const { setTheme, setDarkMode, setDir, toggleSidebar, hoverSidebar, toggleMobileSidebar, toggleLayout, setBorderRadius, toggleHorizontal, setLanguage, setCardShadow } = CustomizerSlice.actions;
const __TURBOPACK__default__export__ = CustomizerSlice.reducer;
}),
"[project]/src/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/es/redux.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customizer$2f$CustomizerSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customizer/CustomizerSlice.tsx [app-ssr] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        customizer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customizer$2f$CustomizerSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    devTools: ("TURBOPACK compile-time value", "development") !== "production"
});
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    customizer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customizer$2f$CustomizerSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/utils/axios.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const axiosServices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create();
// interceptor for http
axiosServices.interceptors.response.use((response)=>response, (error)=>Promise.reject(error.response && error.response.data || 'Wrong Services'));
const __TURBOPACK__default__export__ = axiosServices;
}),
"[project]/src/app/api/mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2d$mock$2d$adapter$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios-mock-adapter/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axios.js [app-ssr] (ecmascript)");
;
;
const mock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2d$mock$2d$adapter$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    delayResponse: 0
});
const __TURBOPACK__default__export__ = mock;
}),
"[project]/src/app/api/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/mock.ts [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onAny().passThrough();
}),
"[project]/src/utils/languages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"HOMEPAGE":"TRANG CHỦ","SHARED SONGS":"BÀI HÁT CHIA SẺ","MY SONGS":"BÀI HÁT CỦA TÔI","UPLOAD FILE":"TẢI FILE LÊN","INSTRUMENTS":"Nhạc cụ","DRUM":"Trống","GUITAR":"Đàn Guitar","PIANO":"Đàn Piano","WELLCOME":"Chào mừng đến với PianoSYNC","WELLCOME_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","LOGIN_TITLE":"Đăng nhập để xem bài hát","LOGIN_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","EMAIL":"Email","PASSWORD":"Mật khẩu","REGISTER_TITLE":"Đăng ký","REGISTER_DESCRIPTION":"Hãy đăng ký để dùng đầy đủ tính năng","LOGIN":"Đăng nhập","REGISTER":"Đăng ký","GOOGLE_LOGIN":"Đăng nhập bằng Google","FACEBOOK_LOGIN":"Đăng nhập bằng Facebook","LOGIN_WITH":"Đăng nhập bằng","OR_LOGIN_WITH":"Hoặc đăng nhập bằng","LOGIN_FAIL":"Đăng nhập thất bại","LOGIN_SUCCESS":"Đăng nhập thành công...Đang chuyển về trang trươc..","HOMEPAGE_TITLE":"Học chơi Piano cho đàn có Bluetooth qua file Midi. Chia sẽ bài hát.","HOMEPAGE_DESCRIPTION":"Piano Sync là ứng dụng giúp bạn học chơi đàn Piano một cách dễ dàng và hiệu quả. Với bạn có thể kết nối đàn Piano có Bluetooth với điện thoại hoặc máy tính bảng để chơi các bài hát yêu thích từ file Midi. Ngoài ra, bạn còn có thể chia sẻ bài hát của mình với cộng đồng Piano Sync và khám phá các bài hát mới từ những người chơi khác.","HOMEPAGE_KEYWORDS":"piano, midi, bluetooth, học piano, ứng dụng học piano, chia sẻ bài hát, học nhạc, đàn piano, Piano Sync","LOGINPAGE_TITLE":"Đăng nhập","LOGINPAGE_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","LOGINPAGE_KEYWORDS":"đăng nhập, tài khoản, học đàn, chơi đàn","UPLOAD_TITLE":"Tải lên bài hát của bạn","UPLOAD_DESCRIPTION":"Tải lên các bài hát định dạng midi của bạn và chia sẻ chúng với mọi người","UPLOAD_FILE_DRAG_DROP":"Kéo và thả hoặc chọn một tập tin","UPLOAD_FILE_SUPPORTED":"Các tập tin được hỗ trợ: .midi, .mid","UPLOAD_FILE_NAME":"Tên bài hát","UPLOAD_FILE_PUBLIC":"Công khai","UPLOAD_FILE_PRIVATE":"Riêng tư","UPLOAD_FILE_STATUS":"Trạng thái","UPLOAD_FILE_THUMBNAIL":"Ảnh thu nhỏ","UPLOAD_FILE_SUBMIT":"Tải lên","UPLOAD_FILE_SUCCESS":"Tải lên thành công","UPLOAD_FILE_FAILED":"Tải lên thất bại","UPLOAD_FILE_PLEASE_LOGIN":"Vui lòng đăng nhập để tải lên bài hát","UPLOAD_FILE_SIZE_LIMIT":"Kích thước tập tin tối đa là 20MB","UPLOAD_FILE_TYPE_LIMIT":"Chỉ hỗ trợ tập tin .midi, .mid","UPLOAD_FILE_NAME_REQUIRED":"Tên bài hát không được để trống","UPLOAD_FILE_STATUS_REQUIRED":"Trạng thái không được để trống","UPLOAD_FILE_FILE_REQUIRED":"Vui lòng chọn một tập tin","UPLOAD_FILE_THUMBNAIL_REQUIRED":"Vui lòng chọn một ảnh thu nhỏ","LOGIN_PROCESSING":"Đang đăng nhập...","USER_SONGS":"Bài hát đã tải lên","USER_SONGS_SUBTITLE":"Chơi hoặc xóa các bài nay","UPLOADPAGE_TITLE":"Tải lên bài hát của bạn","UPLOADPAGE_DESCRIPTION":"Chọn file midi để tải lên và chia sẻ với mọi người","UPLOADPAGE_KEYWORDS":"tải lên, chia sẻ, midi, piano, học đàn, xml, musicxml","HOME_BREADCUMB":"Trang chủ","LOGIN_BREADCUMB":"Đăng nhập","REGISTER_BREADCUMB":"Đăng ký","UPLOAD_BREADCUMB":"Tải lên","INSTRUMENTS_BREADCUMB":"Nhạc cụ","SONG_BREADCUMB":"Bài hát","SHARED_SONGS_BREADCUMB":"Bài hát chia sẻ","MY_SONGS_BREADCUMB":"Bài hát của tôi","FILE_CHOICE":"Chọn một tệp (*.mid, *.xml)","SONG_TITLE":"Tiêu đề bài hát","SONG_ARTIST":"Nhạc sĩ","SONG_DESCRIPTION":"Mô tả bài hát","SONG_FILE":"Tải file lên","SONG_DIFFICULT":"Độ khó","SONG_DIFFICULT_EASY":"Dễ","SONG_DIFFICULT_MEDIUM":"Trung bình","SONG_DIFFICULT_HARD":"Khó","SONG_DIFFICULT_EXPERT":"Chuyên gia","SONG_INSTRUMENT":"Nhạc cụ","SONG_STATUS":"Trạng thái","SONG_CREATE":"Tạo bài hát","SONG_THUMBNAIL":"Ảnh bìa","SONG_PUBLIC":"Công khai","SONG_PRIVATE":"Chia sẽ bài hát","SONG_UPLOAD_DATE":"Ngày tải lên","SONG_PLAYS":"Lượt chơi","SONG_SHARES":"Lượt chia sẻ","SONG_DOWNLOADS":"Lượt tải xuống","SONG_LIKES":"Lượt thích","SONG_COMMENTS":"Bình luận","SONG_RELATED_SONGS":"Bài hát liên quan","SONG_NO_RELATED_SONGS":"Không có bài hát liên quan","SONG_VIEW_ALL":"Xem tất cả","SONG_PLAY_SONG":"Chơi bài hát","SONG_SHARE_SONG":"Chia sẻ bài hát","SONG_DOWNLOAD_SONG":"Tải bài hát","SONG_ADD_TO_PLAYLIST":"Thêm vào danh sách phát","SONG_ADD_TO_FAVORITES":"Thêm vào mục yêu thích","SONG_REPORT_SONG":"Báo cáo bài hát","SONG_REPORT_REASON":"Lý do báo cáo","SONG_REPORT_SUBMIT":"Gửi báo cáo","SONG_REPORT_SUCCESS":"Báo cáo đã được gửi","SONG_REPORT_FAILED":"Gửi báo cáo thất bại","SONG_REPORT_ALREADY_REPORTED":"Bạn đã báo cáo bài hát này","SONG_REPORT_LOGIN_REQUIRED":"Vui lòng đăng nhập để báo cáo bài hát","LIGIN_TO_UPLOAD":"Đăng nhập để tải lên","CHECK_FILE":"Kiểm tra File","CHECKING_FILE":"Đang kiểm tra File..","CHECKING_FILE_OK":"Đã kiểm tra file thành công.","CHECKING_FILE_ERROR":"File kiểm tra bị lỗi","CHECKING_FILE_NOTSUPPORT":"Lỗi file không hỗ trợ","PROCESSING_FILE":"Đang sử lý file...vui lòng chờ..","ENTER_SONG_DETAIL":"Hãy nhập Tên bài hát và Nhạc sĩ để tiếp tục","PRIVATE":"Riêng tư","PUBLIC":"Công khai","AGREEMENT":"Tôi đồng ý điều khoản sử dụng","AGREEMENT_YES":"Tôi đồng ý","AGREEMENT_NO":"Tôi không đồng ý","SONG_TITLE_REQUIRED":"Tiêu đề bài hát không được bỏ trống","SONG_ARTIST_REQUIRED":"Nhạc sĩ không được bỏ trống","SONG_CREATE_ERROR":"Tạo bài hát thất bại","SONG_AGREEMENT_REQUIRED":"Bạn phải đồng ý với điều khoản sử dụng","SONG_CREATE_OK":"Tạo bài hát thành công","SONG_LOAD_ERROR":"Lỗi tải bài hát","SONG_DIFFICULT_BEGINNER":"Dễ","SONG_NO_DESCRIPTION":"Không có mô tả cho bài hát này.","SONG_DOWNLOAD_MIDI":"Tải MIDI","SONGPAGE_TITLE":"Chi tiết bài hát","SONGPAGE_DESCRIPTION":"Xem thông tin chi tiết và chơi bài hát.","SONG_TEMPO":"Tempo","SONG_DURATION":"Thời lượng","SONG_SHEET_MUSIC":"Bản nhạc","SONG_SHEET_MUSIC_PAGE":"Trang bản nhạc","SONGSPAGE_TITLE":"Tất cả bài hát","SONGSPAGE_DESCRIPTION":"Khám phá và chơi hàng ngàn bài hát MIDI.","SONGSPAGE_KEYWORDS":"bài hát, midi, piano, học đàn, chia sẻ nhạc","SONGSPAGE_NO_SONG_FOUND":"Không tìm thấy bài hát nào.","SORT_NEWEST":"Mới nhất","SORT_OLDEST":"Cũ nhất","SORT_TITLE":"Tiêu đề","SORT_ARTIST":"Nhạc sĩ","SORT_PLAYS":"Lượt chơi","SORT_LIKES":"Lượt thích","SORT_DOWNLOADS":"Lượt tải xuống","SORT_SHARES":"Lượt chia sẻ","SORT_COMMENTS":"Bình luận","SORT_DIFFICULTY":"Độ khó","MYSONGSPAGE_TITLE: ":"Bài hát của tôi","MYSONGSPAGE_DESCRIPTION":"Quản lý các bài hát bạn đã tải lên.","MYSONGSPAGE_KEYWORDS":"bài hát của tôi, midi, piano, học đàn, chia sẻ nhạc","MYSONGSPAGE_NO_SONG_FOUND":"Bạn chưa tải lên bài hát nào.","MYSONGSPAGE_EDIT_SONG":"Chỉnh sửa bài hát","MYSONGSPAGE_DELETE_SONG":"Xóa bài hát","MYSONGSPAGE_DELETE_SONG_CONFIRM":"Bạn có chắc chắn muốn xóa bài hát này không?","MYSONGSPAGE_DELETE_SONG_SUCCESS":"Xóa bài hát thành công","MYSONGSPAGE_DELETE_SONG_FAILED":"Xóa bài hát thất bại","MYSONGSPAGE_EDIT_SONG_SUCCESS":"Cập nhật bài hát thành công","MYSONGSPAGE_EDIT_SONG_FAILED":"Cập nhật bài hát thất bại","MYSONGSPAGE_EDIT_SONG_TITLE":"Chỉnh sửa bài hát","MYSONGSPAGE_EDIT_SONG_DESCRIPTION":"Chỉnh sửa thông tin bài hát của bạn.","MYSONGSPAGE_EDIT_SONG_KEYWORDS":"chỉnh sửa bài hát, midi, piano, học đàn, chia sẻ nhạc","CREATING_SONG":"Đang tạo bài hát..."});}),
"[project]/src/utils/languages/vn.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"HOMEPAGE":"TRANG CHỦ","SHARED SONGS":"BÀI HÁT CHIA SẺ","MY SONGS":"BÀI HÁT CỦA TÔI","UPLOAD FILE":"TẢI FILE LÊN","INSTRUMENTS":"Nhạc cụ","DRUM":"Trống","GUITAR":"Đàn Guitar","PIANO":"Đàn Piano","WELLCOME":"Chào mừng đến với PianoSYNC","WELLCOME_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","LOGIN_TITLE":"Đăng nhập để xem bài hát","LOGIN_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","EMAIL":"Email","PASSWORD":"Mật khẩu","REGISTER_TITLE":"Đăng ký","REGISTER_DESCRIPTION":"Hãy đăng ký để dùng đầy đủ tính năng","LOGIN":"Đăng nhập","REGISTER":"Đăng ký","GOOGLE_LOGIN":"Đăng nhập bằng Google","FACEBOOK_LOGIN":"Đăng nhập bằng Facebook","LOGIN_WITH":"Đăng nhập bằng","OR_LOGIN_WITH":"Hoặc đăng nhập bằng","LOGIN_FAIL":"Đăng nhập thất bại","LOGIN_SUCCESS":"Đăng nhập thành công...Đang chuyển về trang trươc..","HOMEPAGE_TITLE":"Học chơi Piano cho đàn có Bluetooth qua file Midi. Chia sẽ bài hát.","HOMEPAGE_DESCRIPTION":"Piano Sync là ứng dụng giúp bạn học chơi đàn Piano một cách dễ dàng và hiệu quả. Với bạn có thể kết nối đàn Piano có Bluetooth với điện thoại hoặc máy tính bảng để chơi các bài hát yêu thích từ file Midi. Ngoài ra, bạn còn có thể chia sẻ bài hát của mình với cộng đồng Piano Sync và khám phá các bài hát mới từ những người chơi khác.","HOMEPAGE_KEYWORDS":"piano, midi, bluetooth, học piano, ứng dụng học piano, chia sẻ bài hát, học nhạc, đàn piano, Piano Sync","LOGINPAGE_TITLE":"Đăng nhập","LOGINPAGE_DESCRIPTION":"Hãy đăng nhập để dùng đầy đủ tính năng","LOGINPAGE_KEYWORDS":"đăng nhập, tài khoản, học đàn, chơi đàn","UPLOAD_TITLE":"Tải lên bài hát của bạn","UPLOAD_DESCRIPTION":"Tải lên các bài hát định dạng midi của bạn và chia sẻ chúng với mọi người","UPLOAD_FILE_DRAG_DROP":"Kéo và thả hoặc chọn một tập tin","UPLOAD_FILE_SUPPORTED":"Các tập tin được hỗ trợ: .midi, .mid","UPLOAD_FILE_NAME":"Tên bài hát","UPLOAD_FILE_PUBLIC":"Công khai","UPLOAD_FILE_PRIVATE":"Riêng tư","UPLOAD_FILE_STATUS":"Trạng thái","UPLOAD_FILE_THUMBNAIL":"Ảnh thu nhỏ","UPLOAD_FILE_SUBMIT":"Tải lên","UPLOAD_FILE_SUCCESS":"Tải lên thành công","UPLOAD_FILE_FAILED":"Tải lên thất bại","UPLOAD_FILE_PLEASE_LOGIN":"Vui lòng đăng nhập để tải lên bài hát","UPLOAD_FILE_SIZE_LIMIT":"Kích thước tập tin tối đa là 20MB","UPLOAD_FILE_TYPE_LIMIT":"Chỉ hỗ trợ tập tin .midi, .mid","UPLOAD_FILE_NAME_REQUIRED":"Tên bài hát không được để trống","UPLOAD_FILE_STATUS_REQUIRED":"Trạng thái không được để trống","UPLOAD_FILE_FILE_REQUIRED":"Vui lòng chọn một tập tin","UPLOAD_FILE_THUMBNAIL_REQUIRED":"Vui lòng chọn một ảnh thu nhỏ","LOGIN_PROCESSING":"Đang đăng nhập...","USER_SONGS":"Bài hát đã tải lên","USER_SONGS_SUBTITLE":"Chơi hoặc xóa các bài nay","UPLOADPAGE_TITLE":"Tải lên bài hát của bạn","UPLOADPAGE_DESCRIPTION":"Chọn file midi để tải lên và chia sẻ với mọi người","UPLOADPAGE_KEYWORDS":"tải lên, chia sẻ, midi, piano, học đàn, xml, musicxml","HOME_BREADCUMB":"Trang chủ","LOGIN_BREADCUMB":"Đăng nhập","REGISTER_BREADCUMB":"Đăng ký","UPLOAD_BREADCUMB":"Tải lên","INSTRUMENTS_BREADCUMB":"Nhạc cụ","SONG_BREADCUMB":"Bài hát","SHARED_SONGS_BREADCUMB":"Bài hát chia sẻ","MY_SONGS_BREADCUMB":"Bài hát của tôi","FILE_CHOICE":"Chọn một tệp (*.mid, *.xml)","SONG_TITLE":"Tiêu đề bài hát","SONG_ARTIST":"Nhạc sĩ","SONG_DESCRIPTION":"Mô tả bài hát","SONG_FILE":"Tải file lên","SONG_DIFFICULT":"Độ khó","SONG_DIFFICULT_EASY":"Dễ","SONG_DIFFICULT_MEDIUM":"Trung bình","SONG_DIFFICULT_HARD":"Khó","SONG_DIFFICULT_EXPERT":"Chuyên gia","SONG_INSTRUMENT":"Nhạc cụ","SONG_STATUS":"Trạng thái","SONG_CREATE":"Tạo bài hát","SONG_THUMBNAIL":"Ảnh bìa","SONG_PUBLIC":"Công khai","SONG_PRIVATE":"Chia sẽ bài hát","SONG_UPLOAD_DATE":"Ngày tải lên","SONG_PLAYS":"Lượt chơi","SONG_SHARES":"Lượt chia sẻ","SONG_DOWNLOADS":"Lượt tải xuống","SONG_LIKES":"Lượt thích","SONG_COMMENTS":"Bình luận","SONG_RELATED_SONGS":"Bài hát liên quan","SONG_NO_RELATED_SONGS":"Không có bài hát liên quan","SONG_VIEW_ALL":"Xem tất cả","SONG_PLAY_SONG":"Chơi bài hát","SONG_SHARE_SONG":"Chia sẻ bài hát","SONG_DOWNLOAD_SONG":"Tải bài hát","SONG_ADD_TO_PLAYLIST":"Thêm vào danh sách phát","SONG_ADD_TO_FAVORITES":"Thêm vào mục yêu thích","SONG_REPORT_SONG":"Báo cáo bài hát","SONG_REPORT_REASON":"Lý do báo cáo","SONG_REPORT_SUBMIT":"Gửi báo cáo","SONG_REPORT_SUCCESS":"Báo cáo đã được gửi","SONG_REPORT_FAILED":"Gửi báo cáo thất bại","SONG_REPORT_ALREADY_REPORTED":"Bạn đã báo cáo bài hát này","SONG_REPORT_LOGIN_REQUIRED":"Vui lòng đăng nhập để báo cáo bài hát","LIGIN_TO_UPLOAD":"Đăng nhập để tải lên","CHECK_FILE":"Kiểm tra File","CHECKING_FILE":"Đang kiểm tra File..","CHECKING_FILE_OK":"Đã kiểm tra file thành công.","CHECKING_FILE_ERROR":"File kiểm tra bị lỗi","CHECKING_FILE_NOTSUPPORT":"Lỗi file không hỗ trợ","PROCESSING_FILE":"Đang sử lý file...vui lòng chờ..","ENTER_SONG_DETAIL":"Hãy nhập Tên bài hát và Nhạc sĩ để tiếp tục","PRIVATE":"Riêng tư","PUBLIC":"Công khai","AGREEMENT":"Tôi đồng ý điều khoản sử dụng","AGREEMENT_YES":"Tôi đồng ý","AGREEMENT_NO":"Tôi không đồng ý","SONG_TITLE_REQUIRED":"Tiêu đề bài hát không được bỏ trống","SONG_ARTIST_REQUIRED":"Nhạc sĩ không được bỏ trống","SONG_CREATE_ERROR":"Tạo bài hát thất bại","SONG_AGREEMENT_REQUIRED":"Bạn phải đồng ý với điều khoản sử dụng","SONG_CREATE_OK":"Tạo bài hát thành công","SONG_LOAD_ERROR":"Lỗi tải bài hát","SONG_DIFFICULT_BEGINNER":"Dễ","SONG_NO_DESCRIPTION":"Không có mô tả cho bài hát này.","SONG_DOWNLOAD_MIDI":"Tải MIDI","SONGPAGE_TITLE":"Chi tiết bài hát","SONGPAGE_DESCRIPTION":"Xem thông tin chi tiết và chơi bài hát.","SONG_TEMPO":"Tempo","SONG_DURATION":"Thời lượng","SONG_SHEET_MUSIC":"Bản nhạc","SONG_SHEET_MUSIC_PAGE":"Trang bản nhạc","SONGSPAGE_TITLE":"Tất cả bài hát","SONGSPAGE_DESCRIPTION":"Khám phá và chơi hàng ngàn bài hát MIDI.","SONGSPAGE_KEYWORDS":"bài hát, midi, piano, học đàn, chia sẻ nhạc","SONGSPAGE_NO_SONG_FOUND":"Không tìm thấy bài hát nào.","SORT_NEWEST":"Mới nhất","SORT_OLDEST":"Cũ nhất","SORT_TITLE":"Tiêu đề","SORT_ARTIST":"Nhạc sĩ","SORT_PLAYS":"Lượt chơi","SORT_LIKES":"Lượt thích","SORT_DOWNLOADS":"Lượt tải xuống","SORT_SHARES":"Lượt chia sẻ","SORT_COMMENTS":"Bình luận","SORT_DIFFICULTY":"Độ khó","MYSONGSPAGE_TITLE: ":"Bài hát của tôi","MYSONGSPAGE_DESCRIPTION":"Quản lý các bài hát bạn đã tải lên.","MYSONGSPAGE_KEYWORDS":"bài hát của tôi, midi, piano, học đàn, chia sẻ nhạc","MYSONGSPAGE_NO_SONG_FOUND":"Bạn chưa tải lên bài hát nào.","MYSONGSPAGE_EDIT_SONG":"Chỉnh sửa bài hát","MYSONGSPAGE_DELETE_SONG":"Xóa bài hát","MYSONGSPAGE_DELETE_SONG_CONFIRM":"Bạn có chắc chắn muốn xóa bài hát này không?","MYSONGSPAGE_DELETE_SONG_SUCCESS":"Xóa bài hát thành công","MYSONGSPAGE_DELETE_SONG_FAILED":"Xóa bài hát thất bại","MYSONGSPAGE_EDIT_SONG_SUCCESS":"Cập nhật bài hát thành công","MYSONGSPAGE_EDIT_SONG_FAILED":"Cập nhật bài hát thất bại","MYSONGSPAGE_EDIT_SONG_TITLE":"Chỉnh sửa bài hát","MYSONGSPAGE_EDIT_SONG_DESCRIPTION":"Chỉnh sửa thông tin bài hát của bạn.","MYSONGSPAGE_EDIT_SONG_KEYWORDS":"chỉnh sửa bài hát, midi, piano, học đàn, chia sẻ nhạc","CREATING_SONG":"Đang tạo bài hát..."});}),
"[project]/src/utils/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$vn$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/vn.json (json)");
;
;
;
;
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__["default"]
    },
    vn: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$vn$2e$json__$28$json$29$__["default"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]) // passes i18n down to react-i18next
.init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export C as CacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-ssr] (ecmascript)");
;
;
;
;
;
const styleCache = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        key: 'rtl',
        prepend: true,
        // We have to temporary ignore this due to incorrect definitions
        // in the stylis-plugin-rtl module
        // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
        stylisPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ]
    });
const RTL = (props)=>{
    const { children, direction } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === 'rtl') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__["CacheProvider"], {
            value: styleCache(),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = RTL;
}),
"[project]/src/store/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDispatch",
    ()=>useDispatch,
    "useSelector",
    ()=>useSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [app-ssr] (ecmascript)");
;
const useDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
const useSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"];
}),
"[project]/src/utils/theme/DefaultColors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseDarkTheme",
    ()=>baseDarkTheme,
    "baselightTheme",
    ()=>baselightTheme
]);
const baselightTheme = {
    direction: 'ltr',
    palette: {
        primary: {
            main: '#5D87FF',
            light: '#ECF2FF',
            dark: '#4570EA'
        },
        secondary: {
            main: '#49BEFF',
            light: '#E8F7FF',
            dark: '#23afdb'
        },
        success: {
            main: '#13DEB9',
            light: '#E6FFFA',
            dark: '#02b3a9',
            contrastText: '#ffffff'
        },
        info: {
            main: '#539BFF',
            light: '#EBF3FE',
            dark: '#1682d4',
            contrastText: '#ffffff'
        },
        error: {
            main: '#FA896B',
            light: '#FDEDE8',
            dark: '#f3704d',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#FFAE1F',
            light: '#FEF5E5',
            dark: '#ae8e59',
            contrastText: '#ffffff'
        },
        purple: {
            A50: '#EBF3FE',
            A100: '#6610f2',
            A200: '#557fb9'
        },
        grey: {
            100: '#F2F6FA',
            200: '#EAEFF4',
            300: '#DFE5EF',
            400: '#7C8FAC',
            500: '#5A6A85',
            600: '#2A3547'
        },
        text: {
            primary: '#2A3547',
            secondary: '#2A3547'
        },
        action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
            hover: '#f6f9fc'
        },
        divider: '#e5eaef'
    }
};
const baseDarkTheme = {
    direction: 'ltr',
    palette: {
        primary: {
            main: '#5D87FF',
            light: '#ECF2FF',
            dark: '#4570EA'
        },
        secondary: {
            main: '#777e89',
            light: '#1C455D',
            dark: '#173f98'
        },
        success: {
            main: '#13DEB9',
            light: '#1B3C48',
            dark: '#02b3a9',
            contrastText: '#ffffff'
        },
        info: {
            main: '#539BFF',
            light: '#223662',
            dark: '#1682d4',
            contrastText: '#ffffff'
        },
        error: {
            main: '#FA896B',
            light: '#4B313D',
            dark: '#f3704d',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#FFAE1F',
            light: '#4D3A2A',
            dark: '#ae8e59',
            contrastText: '#ffffff'
        },
        purple: {
            A50: '#EBF3FE',
            A100: '#6610f2',
            A200: '#557fb9'
        },
        grey: {
            100: '#333F55',
            200: '#465670',
            300: '#7C8FAC',
            400: '#DFE5EF',
            500: '#EAEFF4',
            600: '#F2F6FA'
        },
        text: {
            primary: '#EAEFF4',
            secondary: '#7C8FAC'
        },
        action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
            hover: '#333F55'
        },
        divider: '#333F55',
        background: {
            default: '#171c23',
            dark: '#171c23',
            paper: '#171c23'
        }
    }
};
;
}),
"[project]/src/utils/theme/Components.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// project imports
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DefaultColors.tsx [app-ssr] (ecmascript)");
;
const components = (theme)=>{
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    height: '100%',
                    width: '100%'
                },
                a: {
                    textDecoration: 'none'
                },
                body: {
                    height: '100%',
                    margin: 0,
                    padding: 0
                },
                '#root': {
                    height: '100%'
                },
                "*[dir='rtl'] .buyNowImg": {
                    transform: 'scaleX(-1)'
                },
                '.border-none': {
                    border: '0px',
                    td: {
                        border: '0px'
                    }
                },
                '.btn-xs': {
                    minWidth: '30px !important',
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px !important',
                    padding: '0px !important'
                },
                '.hover-text-primary:hover .text-hover': {
                    color: theme.palette.primary.main
                },
                '.hoverCard:hover': {
                    scale: '1.01',
                    transition: ' 0.1s ease-in'
                },
                '.signup-bg': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%'
                },
                '.MuiBox-root': {
                    borderRadius: theme.shape.borderRadius
                },
                '.MuiCardHeader-action': {
                    alignSelf: 'center !important'
                },
                '.emoji-picker-react .emoji-scroll-wrapper': {
                    overflowX: 'hidden'
                },
                '.scrollbar-container': {
                    borderRight: '0 !important'
                },
                '.theme-timeline .MuiTimelineOppositeContent-root': {
                    minWidth: '90px'
                },
                '.MuiAlert-root .MuiAlert-icon': {
                    color: 'inherit!important'
                },
                '.MuiTimelineConnector-root': {
                    width: '1px !important'
                },
                ' .simplebar-scrollbar:before': {
                    background: `${theme.palette.grey[300]} !important`
                },
                '@keyframes gradient': {
                    '0%': {
                        backgroundPosition: '0% 50%'
                    },
                    '50%': {
                        backgroundPosition: ' 100% 50%'
                    },
                    '100% ': {
                        backgroundPosition: ' 0% 50%'
                    }
                },
                '.rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path': {
                    clipPath: 'inset(0 0 5% 0 round 20px)'
                }
            }
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    ':before': {
                        backgroundColor: theme.palette.grey[100]
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // border: `1px solid ${theme.palette.divider}`,
                    backgroundImage: 'none'
                }
            }
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                },
                sizeSmall: {
                    width: 30,
                    height: 30,
                    minHeight: 30
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none'
                },
                text: {
                    padding: '5px 15px'
                },
                textPrimary: {
                    backgroundColor: theme.palette.primary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                    }
                },
                textSecondary: {
                    backgroundColor: theme.palette.secondary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white'
                    }
                },
                textSuccess: {
                    backgroundColor: theme.palette.success.light,
                    '&:hover': {
                        backgroundColor: theme.palette.success.main,
                        color: 'white'
                    }
                },
                textError: {
                    backgroundColor: theme.palette.error.light,
                    '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        color: 'white'
                    }
                },
                textInfo: {
                    backgroundColor: theme.palette.info.light,
                    '&:hover': {
                        backgroundColor: theme.palette.info.main,
                        color: 'white'
                    }
                },
                textWarning: {
                    backgroundColor: theme.palette.warning.light,
                    '&:hover': {
                        backgroundColor: theme.palette.warning.main,
                        color: 'white'
                    }
                },
                outlinedPrimary: {
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                    }
                },
                outlinedSecondary: {
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white'
                    }
                },
                outlinedError: {
                    '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        color: 'white'
                    }
                },
                outlinedSuccess: {
                    '&:hover': {
                        backgroundColor: theme.palette.success.main,
                        color: 'white'
                    }
                },
                outlinedInfo: {
                    '&:hover': {
                        backgroundColor: theme.palette.info.main,
                        color: 'white'
                    }
                },
                outlinedWarning: {
                    '&:hover': {
                        backgroundColor: theme.palette.warning.main,
                        color: 'white'
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: '100%',
                    padding: '15px',
                    backgroundImage: 'none'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:last-child td': {
                        borderBottom: 0
                    }
                }
            }
        },
        MuiGridItem: {
            styleOverrides: {
                root: {
                    paddingTop: '30px',
                    paddingLeft: '30px !important'
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: '6px'
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: '0.75rem'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    color: 'white'
                },
                filledInfo: {
                    color: 'white'
                },
                filledError: {
                    color: 'white'
                },
                filledWarning: {
                    color: 'white'
                },
                standardSuccess: {
                    backgroundColor: theme.palette.success.light,
                    color: theme.palette.success.main
                },
                standardError: {
                    backgroundColor: theme.palette.error.light,
                    color: theme.palette.error.main
                },
                standardWarning: {
                    backgroundColor: theme.palette.warning.light,
                    color: theme.palette.warning.main
                },
                standardInfo: {
                    backgroundColor: theme.palette.info.light,
                    color: theme.palette.info.main
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: theme.palette.success.main
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: theme.palette.warning.main
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: theme.palette.info.main
                },
                successIcon: {
                    color: theme.palette.info.main
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300]
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.grey[300]
                    }
                },
                input: {
                    padding: '12px 14px'
                },
                inputSizeSmall: {
                    padding: '8px 14px'
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.palette.background.paper,
                    background: theme.palette.text.primary
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderColor: `${theme.palette.divider}`
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem'
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: 'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = components;
}),
"[next]/internal/font/google/montserrat_6c1f062c.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "montserrat_6c1f062c-module__KqCCSW__className",
});
}),
"[next]/internal/font/google/montserrat_6c1f062c.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_6c1f062c.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Montserrat', Helvetica, Arial, sans-serif",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/utils/theme/Typography.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_6c1f062c.js [app-ssr] (ecmascript)");
;
const typography = {
    fontFamily: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_6c1f062c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily,
    h1: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: '2.75rem'
    },
    h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '1.75rem'
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.3125rem',
        lineHeight: '1.6rem'
    },
    h5: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: '1.6rem'
    },
    h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '1.2rem'
    },
    button: {
        textTransform: 'capitalize',
        fontWeight: 400
    },
    body1: {
        fontSize: '0.8rem',
        fontWeight: 400,
        lineHeight: '1.334rem'
    },
    body2: {
        fontSize: '0.75rem',
        letterSpacing: '0rem',
        fontWeight: 400,
        lineHeight: '1rem'
    },
    subtitle1: {
        fontSize: '0.8rem',
        fontWeight: 400
    },
    subtitle2: {
        fontSize: '0.8rem',
        fontWeight: 400
    }
};
const __TURBOPACK__default__export__ = typography;
;
}),
"[project]/src/utils/theme/Shadows.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darkshadows",
    ()=>darkshadows,
    "shadows",
    ()=>shadows
]);
const shadows = [
    'none',
    '0px 2px 3px rgba(0,0,0,0.10)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
    '0 9px 17.5px rgb(0,0,0,0.05)',
    'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)'
];
const darkshadows = [
    'none',
    '0px 2px 3px rgba(0,0,0,0.10)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
    '0 9px 17.5px rgb(0,0,0,0.05)',
    'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 2%) 0px 12px 24px -4px',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)'
];
;
}),
"[project]/src/utils/theme/DarkThemeColors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkThemeColors",
    ()=>DarkThemeColors
]);
const DarkThemeColors = [
    {
        name: 'BLUE_THEME',
        palette: {
            primary: {
                main: '#5D87FF',
                light: '#253662',
                dark: '#4570EA',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#49BEFF',
                light: '#1C455D',
                dark: '#23afdb',
                contrastText: '#ffffff'
            },
            background: {
                default: '#2A3447',
                dark: '#2A3547',
                paper: '#2A3447'
            }
        }
    },
    {
        name: 'AQUA_THEME',
        palette: {
            primary: {
                main: '#0074BA',
                light: '#103247',
                dark: '#006DAF',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#47D7BC',
                light: '#0C4339',
                dark: '#39C7AD',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'PURPLE_THEME',
        palette: {
            primary: {
                main: '#763EBD',
                light: '#26153C',
                dark: '#6E35B7',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#95CFD5',
                light: '#09454B',
                dark: '#8BC8CE',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'GREEN_THEME',
        palette: {
            primary: {
                main: '#0A7EA4',
                light: '#05313F',
                dark: '#06769A',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#CCDA4E',
                light: '#282917',
                dark: '#C3D046',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'CYAN_THEME',
        palette: {
            primary: {
                main: '#01C0C8',
                light: '#003638',
                dark: '#00B9C0',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#FB9678',
                light: '#40241C',
                dark: '#F48B6C',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'ORANGE_THEME',
        palette: {
            primary: {
                main: '#FA896B',
                light: '#402E32',
                dark: '#F48162',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#0074BA',
                light: '#082E45',
                dark: '#006FB1',
                contrastText: '#ffffff'
            }
        }
    }
];
;
}),
"[project]/src/utils/theme/LightThemeColors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightThemeColors",
    ()=>LightThemeColors
]);
const LightThemeColors = [
    {
        name: 'BLUE_THEME',
        palette: {
            primary: {
                main: '#5D87FF',
                light: '#ECF2FF',
                dark: '#4570EA',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#49BEFF',
                light: '#E8F7FF',
                dark: '#23afdb',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'AQUA_THEME',
        palette: {
            primary: {
                main: '#0074BA',
                light: '#EFF9FF',
                dark: '#006DAF',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#47D7BC',
                light: '#EDFBF7',
                dark: '#39C7AD',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'PURPLE_THEME',
        palette: {
            primary: {
                main: '#763EBD',
                light: '#F2ECF9',
                dark: '#6E35B7',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#95CFD5',
                light: '#EDF8FA',
                dark: '#8BC8CE',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'GREEN_THEME',
        palette: {
            primary: {
                main: '#0A7EA4',
                light: '#F4F9FB',
                dark: '#06769A',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#CCDA4E',
                light: '#FAFBEF',
                dark: '#C3D046',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'CYAN_THEME',
        palette: {
            primary: {
                main: '#01C0C8',
                light: '#EBF9FA',
                dark: '#00B9C0',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#FB9678',
                light: '#FFF5F2',
                dark: '#F48B6C',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'ORANGE_THEME',
        palette: {
            primary: {
                main: '#FA896B',
                light: '#FBF2EF',
                dark: '#F48162',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#0074BA',
                light: '#EFF9FF',
                dark: '#006FB1',
                contrastText: '#ffffff'
            }
        }
    }
];
;
}),
"[project]/src/utils/theme/Theme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildTheme",
    ()=>BuildTheme,
    "ThemeSettings",
    ()=>ThemeSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/utils/theme/Typography.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Shadows.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DarkThemeColors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/LightThemeColors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DefaultColors.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/locale/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const BuildTheme = (config = {})=>{
    const themeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightThemeColors"].find((theme)=>theme.name === config.theme);
    const darkthemeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DarkThemeColors"].find((theme)=>theme.name === config.theme);
    const customizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer);
    const defaultTheme = customizer.activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseDarkTheme"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baselightTheme"];
    const defaultShadow = customizer.activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darkshadows"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"];
    const themeSelect = customizer.activeMode === 'dark' ? darkthemeOptions : themeOptions;
    const baseMode = {
        palette: {
            mode: customizer.activeMode
        },
        shape: {
            borderRadius: customizer.borderRadius
        },
        shadows: defaultShadow,
        typography: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    };
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].merge({}, baseMode, defaultTheme, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, themeSelect, {
        direction: config.direction
    }));
    theme.components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme);
    return theme;
};
const ThemeSettings = ()=>{
    const activDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer.activeDir);
    const activeTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer.activeTheme);
    const theme = BuildTheme({
        direction: activDir,
        theme: activeTheme
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = activDir;
    }, [
        activDir
    ]);
    return theme;
};
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/utils/theme/EmotionCache.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextAppDirEmotionCacheProvider",
    ()=>NextAppDirEmotionCacheProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export C as CacheProvider>");
'use client';
;
;
;
;
;
function NextAppDirEmotionCacheProvider(props) {
    const { options, CacheProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__["CacheProvider"], children } = props;
    const [{ cache, flush }] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>{
        const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args)=>{
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])(()=>{
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        // eslint-disable-next-line no-restricted-syntax
        for (const name of names){
            styles += cache.inserted[name];
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            "data-emotion": `${cache.key} ${names.join(' ')}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: styles
            }
        }, cache.key, false, {
            fileName: "[project]/src/utils/theme/EmotionCache.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CacheProvider, {
        value: cache,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/utils/theme/EmotionCache.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/myapp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MyApp",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Theme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toploader$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextjs-toploader/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$EmotionCache$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/EmotionCache.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const MyApp = ({ children })=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeSettings"])();
    const customizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toploader$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                color: "#5D87FF"
            }, void 0, false, {
                fileName: "[project]/src/app/myapp.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$EmotionCache$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NextAppDirEmotionCacheProvider"], {
                options: {
                    key: 'modernize'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
                    theme: theme,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        direction: customizer.activeDir,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/myapp.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myapp.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/myapp.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/myapp.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$myapp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/myapp.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
                store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$myapp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MyApp"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c826427._.js.map