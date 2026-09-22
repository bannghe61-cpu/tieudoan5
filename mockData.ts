import { Post, BulletinItem, TraditionItem, EmergencyAlert, SoldierUser } from './types';

export const CURRENT_SOLDIER_USER: SoldierUser = {
  id: 'usr-01',
  militaryId: 'QN-TD5-657-8492',
  fullName: 'Vũ Trọng Nghĩa',
  rank: 'Trung tá',
  position: 'Chính trị viên Tiểu đoàn',
  unit: 'Ban Chỉ huy Tiểu đoàn 5, Lữ đoàn 657, Cục HC-KT QK7',
  role: 'POLITICAL_OFFICER',
  securityClearance: 'CONFIDENTIAL',
  canApprovePosts: true,
  accountStatus: 'APPROVED',
};

export const AVAILABLE_SOLDIERS: SoldierUser[] = [
  CURRENT_SOLDIER_USER,
  {
    id: 'usr-02',
    militaryId: 'QN-TD5-657-8493',
    fullName: 'Nguyễn Văn Hùng',
    rank: 'Đại úy',
    position: 'Chính trị viên phó Tiểu đoàn',
    unit: 'Ban Chính trị Tiểu đoàn 5, Lữ đoàn 657',
    role: 'POLITICAL_OFFICER',
    securityClearance: 'CONFIDENTIAL',
    canApprovePosts: true,
    accountStatus: 'APPROVED',
  },
  {
    id: 'usr-03',
    militaryId: 'QN-TD5-657-0001',
    fullName: 'Đặng Minh Tuấn',
    rank: 'Thượng úy',
    position: 'Sĩ quan CNTT - Quản trị viên Web',
    unit: 'Ban Tham mưu Tiểu đoàn 5, Lữ đoàn 657',
    role: 'ADMIN',
    securityClearance: 'CONFIDENTIAL',
    canApprovePosts: true,
    accountStatus: 'APPROVED',
  },
  {
    id: 'usr-04',
    militaryId: 'QN-TD5-657-1029',
    fullName: 'Trần Đình Trọng',
    rank: 'Thiếu tá',
    position: 'Tiểu đoàn trưởng',
    unit: 'Ban Chỉ huy Tiểu đoàn 5, Lữ đoàn 657',
    role: 'COMMANDER',
    securityClearance: 'CONFIDENTIAL',
    canApprovePosts: false,
    accountStatus: 'APPROVED',
  },
  {
    id: 'usr-05',
    militaryId: 'QN-TD5-657-5512',
    fullName: 'Lê Hoàng Nam',
    rank: 'Thượng úy',
    position: 'Đại đội trưởng',
    unit: 'Đại đội Vận tải Đường bộ 1',
    role: 'SOLDIER',
    securityClearance: 'INTERNAL',
    canApprovePosts: false,
    accountStatus: 'APPROVED',
  },
  {
    id: 'usr-06',
    militaryId: 'QN-TD5-657-9018',
    fullName: 'Phạm Minh Đức',
    rank: 'Trung sĩ',
    position: 'Tiểu đội trưởng Lái xe cơ động',
    unit: 'Đại đội Vận tải Thủy 2',
    role: 'SOLDIER',
    securityClearance: 'PUBLIC',
    canApprovePosts: false,
    accountStatus: 'APPROVED',
  },
  {
    id: 'usr-07',
    militaryId: 'QN-TD5-657-7731',
    fullName: 'Hoàng Văn Quý',
    rank: 'Binh nhất',
    position: 'Chiến sĩ Thợ máy - Kỹ thuật bảo dưỡng',
    unit: 'Trạm Kỹ thuật - Sửa chữa xe máy TĐ5',
    role: 'SOLDIER',
    securityClearance: 'PUBLIC',
    canApprovePosts: false,
    accountStatus: 'APPROVED',
  },
];

export const INITIAL_PENDING_REGISTRATIONS: SoldierUser[] = [
  {
    id: 'reg-01',
    militaryId: 'QN-TD5-CT-2026',
    fullName: 'Bùi Thế Anh',
    rank: 'Thiếu úy',
    position: 'Chính trị viên phó Đại đội 1',
    unit: 'Đại đội Vận tải Đường bộ 1, Tiểu đoàn 5',
    role: 'SOLDIER',
    securityClearance: 'PUBLIC',
    accountStatus: 'PENDING',
    phoneNumber: '0912.456.789',
    email: 'theanh.ctv@tieu-doan-5.vn',
    registrationReason: 'Đăng ký tài khoản Cộng tác viên gửi tin bài hoạt động thi đua, gương chiến sĩ lái xe giỏi của Đại đội 1.',
    registeredAt: '2026-09-21T08:30:00Z',
  },
  {
    id: 'reg-02',
    militaryId: 'DAN-VAN-BD-09',
    fullName: 'Nguyễn Thị Thanh Thảo',
    rank: 'Đoàn viên',
    position: 'Bí thư Đoàn cơ sở xã kết nghĩa',
    unit: 'Đoàn Thanh niên Xã Phú Hòa Đông, Củ Chi',
    role: 'SOLDIER',
    securityClearance: 'PUBLIC',
    accountStatus: 'PENDING',
    phoneNumber: '0988.321.654',
    email: 'thanhthao.doan@tphcm.gov.vn',
    registrationReason: 'Đăng ký viết bài phối hợp hoạt động thanh niên quân dân tình nghĩa, mùa hè xanh và đền ơn đáp nghĩa giữa địa phương và Tiểu đoàn 5.',
    registeredAt: '2026-09-20T16:15:00Z',
  }
];

export const INITIAL_POSTS: Post[] = [
  // 3 BÀI VIẾT ĐANG CHỜ DUYỆT (PENDING APPROVAL) ĐỂ TEST TÍNH NĂNG KIỂM DUYỆT
  {
    id: 'post-pending-01',
    title: 'Sáng kiến cải tiến hệ thống làm mát động cơ tàu vận tải đường sông của Đại đội 2',
    summary: 'Giải pháp lắp đặt van xả cặn kép giúp nâng cao tuổi thọ máy thủy khi hoạt động tại các vùng luồng lạch phù sa và nước mặn khu vực miền Đông Nam Bộ.',
    content: `Xuất phát từ thực tiễn vận chuyển quân nhu, khí tài trên các tuyến luồng sông Soài Rạp, sông Lòng Tàu và luồng lạch ven biển Quân khu 7, nhóm sáng kiến Đại đội Vận tải Thủy 2 do đồng chí Thượng úy Lê Hoàng Nam hướng dẫn đã hoàn thiện mô hình "Bộ lọc giải nhiệt kép tự súc rửa cho máy thủy".
    
Sáng kiến giúp loại bỏ 95% bèo lục bình và phù sa xâm nhập cổ hút nước làm mát, giảm 40% nguy cơ quá nhiệt động cơ trong các chuyến hành trình chi viện đường dài.

Đại đội 2 kính đề nghị Hội đồng Khoa học Kỹ thuật Tiểu đoàn 5 và Lữ đoàn 657 nghiệm thu, nhân rộng trên toàn biên chế phương tiện thủy của đơn vị.`,
    category: 'HUAN_LUYEN',
    securityLevel: 'INTERNAL',
    status: 'PENDING',
    author: {
      name: 'Lê Hoàng Nam',
      rank: 'Thượng úy',
      unit: 'Đại đội Vận tải Thủy 2',
      militaryId: 'QN-TD5-657-5512',
    },
    submittedAt: '2026-09-21T18:15:00Z',
    publishedAt: '2026-09-21T18:15:00Z',
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 0,
    shares: 0,
    comments: [],
    tags: ['Sáng kiến kỹ thuật', 'Lữ đoàn 657', 'Vận tải thủy', 'Quân khu 7'],
  },
  {
    id: 'post-pending-02',
    title: 'Chi đoàn Trạm Kỹ thuật TĐ5 thu hoạch đợt 1 vườn cây ăn trái và cá thịt nhập bếp ăn',
    summary: 'Phong trào Ngày thứ Bảy tình nguyện của tuổi trẻ Tiểu đoàn 5 đem lại 420kg rau củ và 180kg cá tươi bổ sung cho bữa ăn bộ đội.',
    content: `Hưởng ứng phong trào thi đua "Thanh niên Lữ đoàn 657 rèn đức luyện tài, xung kích sáng tạo", sáng ngày 21/09, hơn 50 đoàn viên thanh niên Trạm Kỹ thuật và Đại đội 1 đã tổ chức thu hoạch ao cá và vườn giàn tăng gia tập trung tại khuôn viên doanh trại Tiểu đoàn 5.

Toàn bộ sản phẩm được bàn giao cho Tổ nuôi quân với giá thấp hơn thị trường địa phương 20%, bảo đảm quân số khỏe bước vào mùa luyện quân đạt 99,2%.`,
    category: 'TANG_GIA',
    securityLevel: 'PUBLIC',
    status: 'PENDING',
    author: {
      name: 'Phạm Minh Đức',
      rank: 'Trung sĩ',
      unit: 'Trạm Kỹ thuật - Bảo dưỡng TĐ5',
      militaryId: 'QN-TD5-657-9018',
    },
    submittedAt: '2026-09-21T17:00:00Z',
    publishedAt: '2026-09-21T17:00:00Z',
    images: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 0,
    shares: 0,
    comments: [],
    tags: ['Tăng gia sản xuất', 'Chi đoàn Lữ đoàn 657', 'Thanh niên xung kích'],
  },
  {
    id: 'post-pending-03',
    title: 'Tự hào người lính vận tải chiến lược miền Đông: "Yêu xe như con, quý xăng như máu"',
    summary: 'Tâm sự và quyết tâm của người chiến sĩ lái xe Tiểu đoàn 5 trước giờ xuất kích thực hiện nhiệm vụ chi viện biên giới Tây Nam.',
    content: `Trên từng cung đường rừng chiến khu xưa hay qua những luồng sông rạch hiểm trở của miền Nam, mỗi chuyến xe lăn bánh, mỗi con tàu rẽ sóng của Tiểu đoàn 5 đều chuyên chở trọn vẹn tình cảm và ý chí sắt đá của Bộ đội Hậu cần - Kỹ thuật Quân khu 7.

Chúng tôi nguyện khắc sâu lời Bác Hồ dạy, giữ vững kỷ luật tay lái, làm chủ phương tiện trong mọi điều kiện thời tiết, đưa hàng đến đích an toàn tuyệt đối!`,
    category: 'DONG_DOI',
    securityLevel: 'PUBLIC',
    status: 'PENDING',
    author: {
      name: 'Hoàng Văn Quý',
      rank: 'Binh nhất',
      unit: 'Đại đội Vận tải Đường bộ 1',
      militaryId: 'QN-TD5-657-7731',
    },
    submittedAt: '2026-09-21T16:30:00Z',
    publishedAt: '2026-09-21T16:30:00Z',
    images: [
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 0,
    shares: 0,
    comments: [],
    tags: ['Chiến sĩ lái xe', 'Lữ đoàn 657', 'Cục HC-KT QK7'],
  },

  // CÁC BÀI VIẾT ĐÃ PHÊ DUYỆT CHÍNH THỨC (APPROVED POSTS)
  {
    id: 'post-01',
    title: 'Tiểu đoàn 5 hoàn thành xuất sắc nhiệm vụ cơ động vận chuyển chi viện diễn tập Quân khu 7',
    summary: 'Đơn vị bảo đảm vận tải an toàn tuyệt đối 100% vũ khí trang bị và quân lương qua cả 2 tuyến đường bộ và đường sông trong điều kiện thời tiết mưa bão phức tạp.',
    content: `Thực hiện mệnh lệnh của Tư lệnh Quân khu và Chỉ huy Lữ đoàn 657, Tiểu đoàn 5 vừa hoàn thành đợt vận chuyển khối lượng lớn vũ khí, trang bị kỹ thuật và vật tư hậu cần phục vụ diễn tập thực binh quy mô lớn của LLVT Quân khu 7.

Với cung đường cơ động kéo dài hơn 280km qua nhiều địa bàn địa hình đồi dốc và tuyến phà sông trọng điểm, cán bộ chiến sĩ Tiểu đoàn 5 đã nêu cao tinh thần trách nhiệm, quán triệt phương châm "Đi mây về gió, giữ bí mật, an toàn tuyệt đối".

100% phương tiện ô tô vận tải bọc bạt kín, tàu vận tải thủy chuyên dụng giữ vững hệ số kỹ thuật Kt = 1.0. Toàn bộ hàng hóa và vật tư quân sự được bàn giao đúng thời gian, địa điểm quy định.

Đồng chí Thiếu tá Trần Đình Trọng - Tiểu đoàn trưởng biểu dương tinh thần quả cảm, tinh nhuệ của cán bộ chiến sĩ Đại đội 1 và Đại đội 2, đồng thời yêu cầu các phân đội nhanh chóng tổ chức bảo dưỡng cấp 1, chuẩn bị sẵn sàng cho các nhiệm vụ tiếp theo.`,
    category: 'HUAN_LUYEN',
    securityLevel: 'PUBLIC',
    status: 'APPROVED',
    approvedBy: {
      name: 'Vũ Trọng Nghĩa',
      rank: 'Trung tá',
      position: 'Chính trị viên Tiểu đoàn',
      militaryId: 'QN-TD5-657-8492',
    },
    approvedAt: '2026-09-20T08:00:00Z',
    author: {
      name: 'Nguyễn Văn Hùng',
      rank: 'Đại úy',
      unit: 'Ban Chính trị Tiểu đoàn 5',
    },
    publishedAt: '2026-09-20T08:30:00Z',
    images: [
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=1200&q=80',
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoTitle: 'Phóng sự: Đoàn xe vận tải Tiểu đoàn 5 hành quân chi viện thao trường',
    likes: 78,
    hasLiked: false,
    shares: 26,
    isPinned: true,
    tags: ['Vận tải chi viện', 'Lữ đoàn 657', 'Cục HC-KT Quân khu 7', 'Sẵn sàng chiến đấu'],
    comments: [
      {
        id: 'cmt-01',
        authorName: 'Lê Hoàng Nam',
        authorRank: 'Thượng úy',
        authorUnit: 'Đại đội Vận tải 1',
        content: 'Cán bộ, chiến sĩ Đại đội 1 xin hứa luôn duy trì tình trạng xe tốt, máy khỏe, sẵn sàng xuất kích bất kể ngày đêm!',
        timestamp: '2026-09-20T09:15:00Z',
        isVerifiedSoldier: true,
      },
      {
        id: 'cmt-02',
        authorName: 'Phạm Minh Đức',
        authorRank: 'Trung sĩ',
        authorUnit: 'Đại đội Vận tải Thủy 2',
        content: 'Đội tàu thuyền đã cập bến an toàn, toàn bộ khí tài trang bị được chằng buộc đúng quy trình kỹ thuật.',
        timestamp: '2026-09-20T10:02:00Z',
        isVerifiedSoldier: true,
      },
    ],
  },
  {
    id: 'post-02',
    title: 'Hành quân dã ngoại kết hợp công tác dân vận hỗ trợ đồng bào biên giới Tây Nam',
    summary: 'Cán bộ chiến sĩ Tiểu đoàn 5, Lữ đoàn 657 hỗ trợ sửa chữa 3km đường liên ấp, vận chuyển vật liệu xây nhà tình nghĩa và khám bệnh cấp thuốc miễn phí.',
    content: `Trong đợt dã ngoại rèn luyện thể lực và kỹ năng cơ động dài ngày, hơn 120 cán bộ, chiến sĩ Tiểu đoàn 5 (Lữ đoàn 657) đã phối hợp cùng chính quyền và nhân dân địa phương tổ chức nhiều hoạt động "Dân vận khéo" có ý nghĩa thiết thực.

Đơn vị đã huy động xe ben, xe tải chuyên dùng vận chuyển hơn 80 tấn đá dăm và cát sỏi, giúp bà con nâng cấp 3km đường giao thông nông thôn bị xuống cấp sau mùa mưa; khơi thông 2,5km mương thoát nước phục vụ tưới tiêu.

Tổ Quân y Tiểu đoàn đã thăm khám, tư vấn sức khỏe và trao tặng quà thuốc cho 65 gia đình chính sách, cựu chiến binh và hộ nghèo trên địa bàn, bồi đắp mối quan hệ đoàn kết gắn bó máu thịt quân - dân.`,
    category: 'DAN_VAN',
    securityLevel: 'PUBLIC',
    status: 'APPROVED',
    approvedBy: {
      name: 'Vũ Trọng Nghĩa',
      rank: 'Trung tá',
      position: 'Chính trị viên Tiểu đoàn',
      militaryId: 'QN-TD5-657-8492',
    },
    approvedAt: '2026-09-18T14:00:00Z',
    author: {
      name: 'Vũ Quốc Toàn',
      rank: 'Trung úy',
      unit: 'Ban Hậu cần - Kỹ thuật TĐ5',
    },
    publishedAt: '2026-09-18T14:20:00Z',
    images: [
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 124,
    hasLiked: true,
    shares: 51,
    tags: ['Dân vận khéo', 'Biên giới Tây Nam', 'Lữ đoàn 657', 'Thắm tình quân dân'],
    comments: [
      {
        id: 'cmt-03',
        authorName: 'Đặng Tuấn Anh',
        authorRank: 'Binh nhất',
        authorUnit: 'Đại đội Vận tải 1',
        content: 'Bà con địa phương mang dừa xiêm và trái cây tặng bộ đội, ấm áp tình quân dân như người trong một nhà.',
        timestamp: '2026-09-18T15:40:00Z',
        isVerifiedSoldier: true,
      },
      {
        id: 'cmt-03b',
        authorName: 'Cô Nguyễn Thị Lan',
        authorRank: 'Người dân địa phương',
        authorUnit: 'Ấp 3, Xã Bình An',
        content: 'Cảm ơn các chú bộ đội Tiểu đoàn 5 nhiều lắm! Có bộ đội về sửa đường, bà con và các cháu học sinh đi lại thuận tiện, không còn lo trơn trượt mùa mưa.',
        timestamp: '2026-09-18T16:10:00Z',
        isVerifiedSoldier: false,
      }
    ],
  },
  {
    id: 'post-02b',
    title: 'Hậu phương gửi trọn niềm tin: Thăm hỏi và tiếp sức cho chiến sĩ mới Tiểu đoàn 5',
    summary: 'Chuyến thăm đầy xúc động của Hội Phụ nữ và Đoàn Thanh niên địa phương mang theo tình cảm ấm áp của quê hương đến với các chiến sĩ trên thao trường nắng gió.',
    content: `Nhằm kịp thời động viên tinh thần cán bộ, chiến sĩ yên tâm tư tưởng, hoàn thành xuất sắc mọi nhiệm vụ được giao, đoàn đại biểu Hội Phụ nữ và Huyện đoàn kết nghĩa đã có chuyến thăm, giao lưu văn hóa văn nghệ ấm áp nghĩa tình tại Tiểu đoàn 5, Lữ đoàn 657.
    
Trong buổi gặp gỡ, những phần quà ý nghĩa, những tiết mục văn nghệ chan chứa tình quê hương và những lời dặn dò ân cần từ các mẹ, các chị đã tiếp thêm nguồn động lực to lớn cho những người lính trẻ. 
    
Đại diện các chiến sĩ mới nhập ngũ, Binh nhì Trần Văn Hưng xúc động bày tỏ: "Sự quan tâm của gia đình và nhân dân hậu phương là điểm tựa vững chắc để chúng cháu không ngừng phấn đấu, rèn luyện nghiêm, xứng danh anh Bộ đội Cụ Hồ thời kỳ mới".`,
    category: 'DAN_VAN',
    securityLevel: 'PUBLIC',
    status: 'APPROVED',
    approvedBy: {
      name: 'Vũ Trọng Nghĩa',
      rank: 'Trung tá',
      position: 'Chính trị viên Tiểu đoàn',
      militaryId: 'QN-TD5-657-8492',
    },
    approvedAt: '2026-09-16T15:00:00Z',
    author: {
      name: 'Nguyễn Văn Hùng',
      rank: 'Đại úy',
      unit: 'Ban Chính trị Tiểu đoàn 5',
    },
    publishedAt: '2026-09-16T15:30:00Z',
    images: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
    ],
    likes: 189,
    hasLiked: false,
    shares: 64,
    tags: ['Tình quân dân', 'Hậu phương quân đội', 'Tiểu đoàn 5', 'Quân khu 7'],
    comments: [
      {
        id: 'cmt-04a',
        authorName: 'Bác Lê Văn Hạnh',
        authorRank: 'Cựu chiến binh',
        authorUnit: 'Hội CCB TP.HCM',
        content: 'Nhìn các cháu khỏe mạnh, quân dung tươi tỉnh, tác phong nhanh nhẹn mà các cựu chiến binh thế hệ đi trước rất an tâm và tự hào!',
        timestamp: '2026-09-16T16:20:00Z',
        isVerifiedSoldier: false,
      }
    ],
  },
  {
    id: 'post-03',
    title: 'Hội thi "Giữ xe tốt, lái xe an toàn" và Ngày Kỹ thuật mẫu mực năm 2026',
    summary: '100% đầu xe ô tô vận tải, xe chỉ huy và ca-nô chuyên dụng được bảo dưỡng cấp 2, kiểm tra an toàn hệ thống phanh, lái và đèn chiếu sáng đêm.',
    content: `Thực hiện Cuộc vận động 50 "Quản lý, khai thác vũ khí trang bị kỹ thuật tốt, bền, an toàn, tiết kiệm và an toàn giao thông", Tiểu đoàn 5 - Lữ đoàn 657 đã tổ chức Hội thi "Xe tốt, lái xe an toàn".

Hội thi thu hút sự tham gia của toàn bộ đội ngũ lái xe, thợ máy thuộc Đại đội 1, Đại đội 2 và Trạm Kỹ thuật. Các thí sinh trải qua phần thi lý thuyết Luật Giao thông đường bộ, Điều lệ Công tác Kỹ thuật xe máy quân sự và thực hành bảo dưỡng dự phòng, xử lý pan bệnh hỏng hóc dọc đường.

Kết quả chung cuộc: 100% đạt loại Giỏi, đơn vị giữ vững danh hiệu "Đơn vị an toàn giao thông tiêu biểu của Cục Hậu cần - Kỹ thuật Quân khu 7".`,
    category: 'HUAN_LUYEN',
    securityLevel: 'PUBLIC',
    status: 'APPROVED',
    approvedBy: {
      name: 'Đặng Minh Tuấn',
      rank: 'Thượng úy',
      position: 'Quản trị viên Web',
      militaryId: 'QN-TD5-657-0001',
    },
    approvedAt: '2026-09-15T10:45:00Z',
    author: {
      name: 'Lê Văn Thắng',
      rank: 'Đại úy',
      unit: 'Ban Tham mưu Tiểu đoàn 5',
    },
    publishedAt: '2026-09-15T11:00:00Z',
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 62,
    hasLiked: false,
    shares: 19,
    tags: ['Cuộc vận động 50', 'Giữ xe tốt', 'An toàn giao thông', 'Lữ đoàn 657'],
    comments: [],
  },
  {
    id: 'post-04',
    title: 'Khu tăng gia tập trung Tiểu đoàn 5 tự túc 100% rau xanh và thực phẩm sạch',
    summary: 'Mô hình Vườn - Ao - Chuồng khép kín đạt sản lượng 3,5 tấn rau quả và hơn 900kg thịt, cá mỗi quý, góp phần nâng cao đời sống bộ đội.',
    content: `Được sự quan tâm chỉ đạo của Đảng ủy, Chỉ huy Lữ đoàn 657 và Cục Hậu cần - Kỹ thuật Quân khu 7, Tiểu đoàn 5 đã quy hoạch và xây dựng khu tăng gia sản xuất tập trung hiện đại trên diện tích gần 3 ha.

Vườn rau chuyên canh luân canh các loại rau muống, mồng tơi, cải xanh; giàn bầu bí trĩu quả; khu chuồng nuôi lợn thịt, gà thả vườn và hệ thống 2 ao nuôi cá truyền thống. Nhờ đó, đơn vị luôn tự túc 100% nhu cầu rau xanh và hơn 80% định lượng thịt, cá tươi cho các bếp ăn, bảo đảm an toàn vệ sinh thực phẩm tuyệt đối.`,
    category: 'TANG_GIA',
    securityLevel: 'PUBLIC',
    status: 'APPROVED',
    approvedBy: {
      name: 'Vũ Trọng Nghĩa',
      rank: 'Trung tá',
      position: 'Chính trị viên Tiểu đoàn',
      militaryId: 'QN-TD5-657-8492',
    },
    approvedAt: '2026-09-12T16:00:00Z',
    author: {
      name: 'Vũ Quốc Toàn',
      rank: 'Trung úy',
      unit: 'Ban Hậu cần - Kỹ thuật TĐ5',
    },
    publishedAt: '2026-09-12T16:45:00Z',
    images: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    ],
    likes: 85,
    hasLiked: false,
    shares: 22,
    tags: ['Tăng gia sản xuất', 'Nuôi quân giỏi', 'Lữ đoàn 657', 'Cục HC-KT QK7'],
    comments: [],
  },
];

export const INITIAL_BULLETIN: BulletinItem[] = [];

export const INITIAL_TRADITIONS: TraditionItem[] = [
  {
    id: 'trad-01',
    type: 'MOCTHOIGIAN',
    title: 'Lịch sử thành lập Lữ đoàn 657 & Tiểu đoàn 5',
    period: 'Truyền thống vẻ vang',
    summary: 'Cái nôi của những cánh xe, chuyến tàu vận tải anh dũng chi viện chiến trường miền Đông Nam Bộ.',
    content: 'Tiền thân từ các đoàn vận tải hỏa tuyến trong kháng chiến chống Mỹ cứu nước, Lữ đoàn Vận tải 657 (thuộc Cục Hậu cần - Kỹ thuật Quân khu 7) cùng đơn vị thành viên Tiểu đoàn 5 đã lập nên biết bao kỳ tích: vượt qua bom đạn rải thảm, mở luồng sông, khai tuyến đường rừng để đưa từng viên đạn, cân gạo tới tận chiến hào hỏa tuyến. Đơn vị đã vinh dự được Đảng, Nhà nước phong tặng nhiều danh hiệu cao quý.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    badge: 'Mốc son lịch sử',
    significance: 'Khởi nguồn truyền thống vẻ vang',
  },
  {
    id: 'trad-02',
    type: 'CHIENTICH',
    title: 'Chiến công mở tuyến vận tải vượt sông Đồng Nai và vùng ven Sài Gòn 1975',
    period: 'Mùa xuân 1975',
    summary: 'Huy động tối đa tàu thuyền, sà lan và xe tải bốc dỡ phục vụ Chiến dịch Hồ Chí Minh lịch sử.',
    content: 'Trong chiến dịch giải phóng hoàn toàn miền Nam, cán bộ chiến sĩ vận tải của đơn vị đã bất chấp máy bay trinh sát và hỏa lực pháo địch, ngày đêm vận chuyển hàng vạn tấn vũ khí, đạn dược và bộ đội áp sát cửa ngõ Sài Gòn, góp phần làm nên ngày Đại thắng mùa Xuân năm 1975.',
    imageUrl: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=1200&q=80',
    badge: 'Chiến công vang dội',
    significance: 'Huân chương Quân công & Chiến công cao quý',
  },
  {
    id: 'trad-03',
    type: 'LIETSY',
    title: 'Gương chiến đấu dũng cảm của các Anh hùng, Liệt sĩ vận tải Quân khu 7',
    period: 'Trường tồn cùng non sông',
    summary: 'Những người lính kiên trung lấy thân mình che chở xe hàng và khí tài trong mưa bom bão đạn.',
    content: 'Biết bao người con ưu tú của Lữ đoàn 657 và Tiểu đoàn 5 đã anh dũng ngã xuống trên các tuyến đường vận tải máu lửa. Dù trúng đạn bị thương, các đồng chí vẫn giữ chặt vô-lăng, cố gắng đưa xe vượt qua tọa độ lửa đến nơi an toàn, để lại tấm gương sáng ngời cho thế hệ hôm nay noi theo.',
    imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1200&q=80',
    badge: 'Anh hùng LLVTND',
    significance: 'Bất tử cùng non sông đất nước',
  },
  {
    id: 'trad-04',
    type: 'HIENVAT',
    title: 'Vô-lăng và Huân chương Chiến công lưu giữ tại Phòng truyền thống',
    period: 'Bảo vật đơn vị',
    summary: 'Kỷ vật thiêng liêng gắn liền với những chuyến xe bạt ngàn khói lửa của các thế hệ cha anh.',
    content: 'Hiện vật chiếc vô-lăng xe vận tải Zin-157 và lá cờ truyền thống được trang trọng trưng bày tại gian khánh tiết Tiểu đoàn 5. Đây là minh chứng hùng hồn cho tinh thần "Xe chưa qua, lòng không tiếc rẻ; hàng chưa đến, mắt chưa nhắm".',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
    badge: 'Kỷ vật kháng chiến',
    significance: 'Bảo vật truyền thống đơn vị',
  },
  {
    id: 'trad-05',
    type: 'DANHHIEU',
    title: 'Lời Bác dạy ngành Vận tải - Hậu cần Quân đội',
    period: 'Kim chỉ nam hành động',
    summary: '"Yêu xe như con, quý xăng như máu, vượt mọi khó khăn, hoàn thành nhiệm vụ"',
    content: `1. Tuyệt đối trung thành với Đảng, với Tổ quốc và Nhân dân;
2. Giữ tốt, dùng bền, an toàn, tiết kiệm phương tiện khí tài;
3. Kỷ luật hành quân thép, mệnh lệnh là tối thượng;
4. Gắn bó mật thiết với nhân dân vùng đơn vị hành quân qua;
5. Sẵn sàng cơ động chi viện trong mọi tình huống khẩn nguy.`,
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Lời Bác dạy',
    significance: 'Phương châm hành động suốt đời',
  },
];

export const INITIAL_EMERGENCY_ALERTS: EmergencyAlert[] = [
  {
    id: 'alert-01',
    code: 'BĐ-SSCĐ-657-01',
    title: 'LỆNH BÁO ĐỘNG SẴN SÀNG CHIẾN ĐẤU CẤP 1 - TIỂU ĐOÀN 5',
    level: 'RED',
    issuedAt: '2026-09-21T18:00:00Z',
    issuedBy: 'Trực ban Tác chiến Tiểu đoàn 5 - Lữ đoàn 657',
    command: 'Chuyển trạng thái SSCĐ từ thường xuyên lên toàn bộ. 100% quân số các Đại đội Vận tải 1, Đại đội 2 và Trạm Kỹ thuật nổ máy phương tiện, tập kết bãi đỗ trong 08 phút!',
    instructions: [
      'Kiểm tra cơ số xăng dầu đầy bình dự trữ và túi sơ cấp cứu',
      'Đại đội 1 chuẩn bị 20 xe vận tải bọc bạt nhận vũ khí chi viện',
      'Đại đội 2 sẵn sàng 04 tàu vận tải thủy cập bến bốc xếp',
      'Trạm Kỹ thuật bố trí xe sửa chữa cơ động đi cuối đội hình',
    ],
    isActive: false,
    targetUnits: ['Đại đội Vận tải 1', 'Đại đội Vận tải Thủy 2', 'Trạm Kỹ thuật', 'Ban Chỉ huy TĐ5'],
  },
  {
    id: 'alert-02',
    code: 'BĐ-CNCL-657-02',
    title: 'BÁO ĐỘNG PHÒNG CHỐNG THIÊN TAI, BÃO LŨ & CỨU NẠN KHẨN CẤP',
    level: 'ORANGE',
    issuedAt: '2026-09-20T12:00:00Z',
    issuedBy: 'Chỉ huy trưởng Tiểu đoàn 5',
    command: 'Đội cơ động 60 đồng chí cùng 06 xuồng cứu hộ cao tốc và 08 xe tải bánh xích sẵn sàng chi viện vùng ngập lụt ven sông.',
    instructions: [
      'Mang theo áo phao, phao tròn cứu sinh, cưa máy cơ động',
      'Chuẩn bị 500 thùng lương khô và nước uống tiếp tế bà con',
      'Tổ Quân y chuẩn bị túi thuốc cơ động và cáng bạt dã chiến',
    ],
    isActive: false,
    targetUnits: ['Đại đội Vận tải Thủy 2', 'Đại đội Vận tải 1', 'Tổ Quân y'],
  }
];

