export type SecurityLevel = 'PUBLIC' | 'INTERNAL' | 'CONFIDENTIAL';

export type PostCategory = 
  | 'HUAN_LUYEN'      // Huấn luyện chiến đấu & kỹ thuật
  | 'DA_NGOAI'        // Hành quân dã ngoại, diễn tập
  | 'CHINH_TRI'       // Công tác Đảng - Công tác chính trị
  | 'DAN_VAN'         // Tuyên truyền, Dân vận & Tình quân dân
  | 'THI_DUA'         // Thi đua Quyết thắng & Người tốt việc tốt
  | 'TANG_GIA'        // Tăng gia sản xuất & Hậu cần đời sống
  | 'DONG_DOI';       // Nghĩa tình đồng đội & Hậu phương quân đội

export interface Comment {
  id: string;
  authorName: string;
  authorRank: string;      // Cấp bậc: Binh nhì, Hạ sĩ, Trung sĩ, Thượng úy, Đại úy, Thiếu tá...
  authorUnit: string;      // Đơn vị: Đại đội 1, Đại đội 2, Đại đội 3, Đại đội Trợ chiến, Ban Chỉ huy Tiểu đoàn
  content: string;
  timestamp: string;
  isVerifiedSoldier?: boolean;
}

export type PostApprovalStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: PostCategory;
  securityLevel: SecurityLevel;
  status: PostApprovalStatus; // Trạng thái kiểm duyệt: ĐÃ DUYỆT | CHỜ DUYỆT | TỪ CHỐI
  author: {
    name: string;
    rank: string;
    unit: string;
    avatar?: string;
    militaryId?: string;
  };
  submittedAt?: string;
  approvedBy?: {
    name: string;
    rank: string;
    position: string;
    militaryId: string;
  };
  approvedAt?: string;
  rejectionReason?: string;
  publishedAt: string;
  images: string[];
  videoUrl?: string;
  videoTitle?: string;
  likes: number;
  hasLiked?: boolean;
  shares: number;
  comments: Comment[];
  tags: string[];
  isPinned?: boolean;
}

export type BulletinCategory = 
  | 'LICH_CONG_TAC'   // Lịch công tác tuần & tháng
  | 'MENH_LENH_SSCD'  // Mệnh lệnh Sẵn sàng chiến đấu
  | 'TRUC_BAN'        // Phân công Trực ban & Trực chiến
  | 'GUONG_SANG'      // Gương sáng chiến sĩ & Người tốt việc tốt
  | 'THONG_BAO';      // Thông báo nội vụ

export interface BulletinItem {
  id: string;
  title: string;
  category: BulletinCategory;
  priority: 'NORMAL' | 'HIGH' | 'URGENT';
  issuer: string;
  issuerRank: string;
  date: string;
  content: string;
  expiryDate?: string;
  actionRequired?: string;
}

export type TraditionType = 
  | 'CHIENTICH'      // Trận đánh & Chiến công vang dội
  | 'LIETSY'         // Anh hùng LLVTND & Liệt sĩ tiêu biểu
  | 'HIENVAT'        // Kỷ vật, cờ truyền thống, hiện vật lịch sử
  | 'MOCTHOIGIAN'    // Biên niên sự kiện lịch sử đơn vị
  | 'DANHHIEU';      // Phần thưởng cao quý & Lời thề danh dự

export interface TraditionItem {
  id: string;
  type: TraditionType;
  title: string;
  period: string;
  summary: string;
  content: string;
  imageUrl: string;
  badge?: string;
  significance?: string;
}

export interface EmergencyAlert {
  id: string;
  code: string;           // VD: TĐ5-SSCĐ-01
  title: string;
  level: 'RED' | 'ORANGE' | 'YELLOW';
  issuedAt: string;
  issuedBy: string;
  command: string;
  instructions: string[];
  isActive: boolean;
  targetUnits: string[];
}

export type UserApprovalStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

export interface SoldierUser {
  id: string;
  militaryId: string;    // Mã quân nhân / Tên đăng nhập
  fullName: string;
  rank: string;
  position: string;
  unit: string;
  role: 'COMMANDER' | 'POLITICAL_OFFICER' | 'SOLDIER' | 'ADMIN';
  securityClearance: SecurityLevel;
  canApprovePosts?: boolean; // Chỉ Chính trị viên Tiểu đoàn và Quản trị viên
  accountStatus?: UserApprovalStatus; // Trạng thái tài khoản: ĐÃ DUYỆT | CHỜ DUYỆT | TỪ CHỐI
  phoneNumber?: string;
  email?: string;
  registrationReason?: string; // Lý do / mục đích đăng ký cộng tác viên
  registeredAt?: string;
}

// Kiểm tra người dùng có quyền Biên tập / Viết bài hay không:
// Phải là tài khoản đã đăng nhập VÀ trạng thái tài khoản đã được phê duyệt (APPROVED)
export const canUserWritePost = (user?: SoldierUser | null): boolean => {
  if (!user) return false;
  if (user.accountStatus && user.accountStatus !== 'APPROVED') return false;
  return true;
};

// Kiểm tra người dùng có quyền Duyệt bài và Quét lỗ hổng bảo mật:
// Chỉ dành riêng cho Chính trị viên Tiểu đoàn (POLITICAL_OFFICER) và Người điều hành trang web (ADMIN)
export const canUserApprovePosts = (user?: SoldierUser | null): boolean => {
  if (!user) return false;
  if (user.accountStatus && user.accountStatus !== 'APPROVED') return false;
  return user.role === 'POLITICAL_OFFICER' || user.role === 'ADMIN';
};

export const isPoliticalOfficerOrAdmin = (user?: SoldierUser | null): boolean => {
  return canUserApprovePosts(user);
};
