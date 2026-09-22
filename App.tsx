/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Post, 
  SoldierUser, 
  PostCategory, 
  canUserApprovePosts 
} from './types';
import { 
  CURRENT_SOLDIER_USER, 
  AVAILABLE_SOLDIERS, 
  INITIAL_POSTS, 
  INITIAL_TRADITIONS,
  INITIAL_PENDING_REGISTRATIONS
} from './mockData';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { PostCard } from './components/PostCard';
import { PostDetailModal } from './components/PostDetailModal';
import { CreatePostModal } from './components/CreatePostModal';
import { CivilMilitaryOutreach } from './components/CivilMilitaryOutreach';
import { TraditionRoom } from './components/TraditionRoom';
import { TrainingMediaGallery } from './components/TrainingMediaGallery';
import { SecurityCenter } from './components/SecurityCenter';
import { InternalShareModal } from './components/InternalShareModal';
import { ApprovalQueue } from './components/ApprovalQueue';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { MilitaryInsignia } from './components/MilitaryInsignia';
import { 
  Search, 
  PlusCircle, 
  Filter, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ChevronRight,
  Target,
  Users,
  Flag,
  Share2,
  Clock,
  CheckCircle2,
  UserPlus,
  LogIn
} from 'lucide-react';

export default function App() {
  // Navigation: NEWS | CIVIL_MILITARY | TRAINING | TRADITION | APPROVAL | SECURITY
  const [currentTab, setCurrentTab] = useState<string>('NEWS');

  // Registered Active Users / Authors
  const [availableUsers, setAvailableUsers] = useState<SoldierUser[]>(() => {
    const saved = localStorage.getItem('td5_available_users');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return AVAILABLE_SOLDIERS;
  });

  // Pending User Registrations waiting for Political Officer / Admin approval
  const [pendingUsers, setPendingUsers] = useState<SoldierUser[]>(() => {
    const saved = localStorage.getItem('td5_pending_users');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {}
    }
    return INITIAL_PENDING_REGISTRATIONS;
  });

  // Active Soldier Identity / Editorial Staff (can be null if logged out/guest)
  const [currentUser, setCurrentUser] = useState<SoldierUser | null>(() => {
    const saved = localStorage.getItem('td5_current_soldier');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed === null) return null;
        return parsed;
      } catch (e) {}
    }
    return CURRENT_SOLDIER_USER;
  });

  // Posts State
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('td5_posts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasPending = parsed.some((p: any) => p.status === 'PENDING');
          if (!hasPending) {
            const pendingInitial = INITIAL_POSTS.filter((ip) => ip.status === 'PENDING');
            return [...pendingInitial, ...parsed.map((p: any) => ({ ...p, status: p.status || 'APPROVED' }))];
          }
          return parsed.map((p: any) => ({
            ...p,
            status: p.status || 'APPROVED',
          }));
        }
      } catch (e) {}
    }
    return INITIAL_POSTS;
  });

  // Modals
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [sharePostTarget, setSharePostTarget] = useState<Post | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Search & Filter for news
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Persistence to localStorage
  useEffect(() => {
    localStorage.setItem('td5_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('td5_current_soldier', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('td5_available_users', JSON.stringify(availableUsers));
  }, [availableUsers]);

  useEffect(() => {
    localStorage.setItem('td5_pending_users', JSON.stringify(pendingUsers));
  }, [pendingUsers]);

  // Handlers for posts
  const handleToggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const hasLiked = !p.hasLiked;
          return {
            ...p,
            hasLiked,
            likes: hasLiked ? p.likes + 1 : Math.max(0, p.likes - 1),
          };
        }
        return p;
      })
    );

    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost((prev) =>
        prev
          ? {
              ...prev,
              hasLiked: !prev.hasLiked,
              likes: !prev.hasLiked ? prev.likes + 1 : Math.max(0, prev.likes - 1),
            }
          : null
      );
    }
  };

  const handleAddComment = (postId: string, commentText: string) => {
    const newComment = {
      id: `cmt-${Date.now()}`,
      authorName: currentUser ? currentUser.fullName : 'Độc giả Nhân dân',
      authorRank: currentUser ? currentUser.rank : 'Đồng bào',
      authorUnit: currentUser ? currentUser.unit : 'Bạn đọc quan tâm',
      content: commentText,
      timestamp: new Date().toISOString(),
      isVerifiedSoldier: Boolean(currentUser),
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [newComment, ...p.comments],
          };
        }
        return p;
      })
    );

    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost((prev) =>
        prev
          ? {
              ...prev,
              comments: [newComment, ...prev.comments],
            }
          : null
      );
    }
  };

  const handleCreatePost = (newPostData: Omit<Post, 'id' | 'likes' | 'shares' | 'comments'>) => {
    const newPost: Post = {
      ...newPostData,
      id: `post-${Date.now()}`,
      likes: 0,
      shares: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    if (newPost.status === 'PENDING') {
      setCurrentTab('APPROVAL');
    } else {
      setCurrentTab('NEWS');
    }
  };

  const handleApprovePost = (postId: string, approver: SoldierUser) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            status: 'APPROVED',
            approvedBy: {
              name: approver.fullName,
              rank: approver.rank,
              position: approver.position,
              militaryId: approver.militaryId,
            },
            approvedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
          };
        }
        return p;
      })
    );
  };

  const handleRejectPost = (postId: string, reason: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            status: 'REJECTED',
            rejectionReason: reason,
          };
        }
        return p;
      })
    );
  };

  // User Registration & Approval Handlers
  const handleRegisterUser = (newUser: SoldierUser) => {
    setPendingUsers((prev) => [newUser, ...prev]);
  };

  const handleApproveUser = (userId: string) => {
    const target = pendingUsers.find((u) => u.id === userId);
    if (!target) return;

    const activatedUser: SoldierUser = {
      ...target,
      accountStatus: 'APPROVED',
    };

    setPendingUsers((prev) => prev.filter((u) => u.id !== userId));
    setAvailableUsers((prev) => {
      const exists = prev.some((u) => u.id === userId);
      if (exists) {
        return prev.map((u) => (u.id === userId ? activatedUser : u));
      }
      return [...prev, activatedUser];
    });
  };

  const handleRejectUser = (userId: string) => {
    setPendingUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, accountStatus: 'REJECTED' } : u))
    );
  };

  // Pending counts
  const pendingPostsCount = posts.filter((p) => p.status === 'PENDING').length;
  const pendingUserCount = pendingUsers.filter((u) => u.accountStatus === 'PENDING').length;
  const isApprover = canUserApprovePosts(currentUser);
  const pendingApprovalBadge = isApprover ? (pendingPostsCount + pendingUserCount) : pendingPostsCount;

  // Filter posts (Only APPROVED posts appear in public feeds)
  const filteredPosts = posts
    .filter((p) => p.status === 'APPROVED')
    .filter((p) => {
      const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });

  const categoriesFilter = [
    { id: 'ALL', label: 'Tất cả tin bài' },
    { id: 'HUAN_LUYEN', label: 'Huấn luyện chiến đấu' },
    { id: 'DAN_VAN', label: 'Tình cảm quân dân' },
    { id: 'THI_DUA', label: 'Thi đua Quyết thắng' },
    { id: 'CHINH_TRI', label: 'Công tác Đảng - Chính trị' },
    { id: 'DA_NGOAI', label: 'Hành quân dã ngoại' },
    { id: 'TANG_GIA', label: 'Tăng gia sản xuất' },
    { id: 'DONG_DOI', label: 'Nghĩa tình đồng đội' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f2eb] text-stone-900 font-sans">
      
      {/* Official Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        currentUser={currentUser}
        availableUsers={availableUsers}
        onSwitchUser={setCurrentUser}
        onOpenCreatePost={() => setShowCreateModal(true)}
        onOpenLoginModal={() => setShowLoginModal(true)}
        onOpenRegisterModal={() => setShowRegisterModal(true)}
        onLogout={() => setCurrentUser(null)}
        pendingApprovalCount={pendingApprovalBadge}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* VIEW 1: NEWS & EDITORIAL HUB */}
        {currentTab === 'NEWS' && (
          <div className="space-y-6">
            
            {/* OFFICIAL SLOGAN STRIP */}
            <div className="bg-[#991b1b] text-yellow-300 px-4 py-2.5 shadow-xs border-l-4 border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-normal font-sans">
                <span>★</span>
                <span>TIỂU ĐOÀN 5: ĐOÀN KẾT - KỶ CƯƠNG - SÁNG TẠO - QUYẾT THẮNG</span>
                <span>★</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-white font-mono">
                <span>TRUYỀN THỐNG LỮ ĐOÀN 657 VẬN TẢI THỦY BỘ ANH HÙNG</span>
              </div>
            </div>

            {/* PROPAGANDA HEADER CARD */}
            {selectedCategory === 'ALL' && searchQuery.trim() === '' && (
              <div className="bg-white border-2 border-[#991b1b] p-6 shadow-xs relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-center gap-2 text-[#991b1b] text-xs font-mono font-bold uppercase">
                      <ShieldCheck className="w-4 h-4 text-[#991b1b]" />
                      <span>CỔNG THÔNG TIN ĐIỆN TỬ TUYÊN TRUYỀN PHỔ THÔNG</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-stone-900 leading-tight uppercase">
                      XÂY DỰNG ĐƠN VỊ VỮNG MẠNH TOÀN DIỆN "MẪU MỰC, TIÊU BIỂU"
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      Trang thông tin chính thức kết nối cán bộ, chiến sĩ Tiểu đoàn 5 với nhân dân địa phương, hậu phương gia đình và đồng đội. Nơi phản ánh sinh động khí thế thi đua huấn luyện giỏi, sẵn sàng chiến đấu cao, vận tải chi viện thủy bộ an toàn tuyệt đối.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2.5">
                      <button
                        onClick={() => setShowCreateModal(true)}
                        className="px-4 py-2 bg-[#2d5a27] hover:bg-[#23481e] text-white text-xs font-bold uppercase shadow-xs flex items-center gap-1.5 transition-colors"
                      >
                        <PlusCircle className="w-4 h-4 text-yellow-300" />
                        <span>GỬI BÀI BIÊN TẬP</span>
                      </button>

                      <button
                        onClick={() => setCurrentTab('CIVIL_MILITARY')}
                        className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase border border-stone-300 flex items-center gap-1.5 transition-colors"
                      >
                        <HeartHandshake className="w-4 h-4 text-[#991b1b]" />
                        <span>GỬI LỜI NHẮN HẬU PHƯƠNG</span>
                      </button>

                      {!currentUser && (
                        <button
                          onClick={() => setShowRegisterModal(true)}
                          className="px-4 py-2 bg-[#991b1b] hover:bg-[#851818] text-white text-xs font-bold uppercase shadow-xs flex items-center gap-1.5 transition-colors"
                        >
                          <UserPlus className="w-4 h-4 text-yellow-300" />
                          <span>ĐĂNG KÝ TÀI KHOẢN TÁC GIẢ</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Highlights Pillar Box */}
                  <div className="bg-[#faf8f5] border border-stone-300 p-4 space-y-3">
                    <div className="text-xs font-bold text-stone-800 uppercase border-b border-stone-200 pb-2 flex items-center justify-between">
                      <span>CHỈ TIÊU THI ĐUA NĂM 2026</span>
                      <span className="text-[#991b1b] font-mono">TĐ5 - QK7</span>
                    </div>

                    <ul className="text-xs text-stone-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2d5a27] font-bold">✓</span>
                        <span>100% nội dung huấn luyện đạt yêu cầu, khá giỏi trên 85%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2d5a27] font-bold">✓</span>
                        <span>Đội tàu, thuyền, xe máy sẵn sàng cơ động vận tải 24/7.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2d5a27] font-bold">✓</span>
                        <span>Gắn kết chặt chẽ nghĩa tình quân dân, không để ai bị bỏ lại phía sau.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2d5a27] font-bold">✓</span>
                        <span>Giữ vững an toàn thông tin, bảo mật tuyệt đối trên không gian mạng.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* SEARCH & CATEGORY BAR */}
            <div className="bg-white border border-stone-300 p-3.5 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm bài viết, tác giả, chuyên mục..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-stone-300 rounded-xs focus:ring-1 focus:ring-[#991b1b] focus:border-[#991b1b] bg-stone-50"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <span className="font-medium">Hiển thị:</span>
                  <strong className="font-mono text-[#991b1b]">{filteredPosts.length}</strong> bài viết công khai
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {categoriesFilter.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xs whitespace-nowrap font-medium text-xs transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#991b1b] text-white font-bold shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* MAIN POSTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onOpenDetail={setSelectedPost}
                  onToggleLike={handleToggleLike}
                  onOpenShare={setSharePostTarget}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="bg-white border border-stone-300 p-12 text-center rounded-xs">
                <p className="text-stone-500 text-sm">
                  Không tìm thấy bài viết nào phù hợp với bộ lọc tìm kiếm.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  className="mt-3 px-4 py-1.5 bg-[#991b1b] text-white text-xs font-bold rounded-xs"
                >
                  Đặt lại bộ lọc
                </button>
              </div>
            )}

          </div>
        )}

        {/* VIEW 2: CIVIL-MILITARY OUTREACH (Tình nghĩa quân dân & Hậu phương) */}
        {currentTab === 'CIVIL_MILITARY' && (
          <CivilMilitaryOutreach
            posts={posts}
            currentUser={currentUser}
            onSelectPost={setSelectedPost}
            onToggleLike={handleToggleLike}
            onOpenCreatePost={() => setShowCreateModal(true)}
          />
        )}

        {/* VIEW 3: TRAINING & FIELD MEDIA GALLERY */}
        {currentTab === 'TRAINING' && (
          <TrainingMediaGallery
            posts={posts}
            currentUser={currentUser}
            onOpenPost={setSelectedPost}
            onOpenCreatePost={() => setShowCreateModal(true)}
          />
        )}

        {/* VIEW 4: APPROVAL QUEUE (Biên tập & duyệt bài) */}
        {currentTab === 'APPROVAL' && (
          <ApprovalQueue
            posts={posts}
            currentUser={currentUser}
            onApprovePost={handleApprovePost}
            onRejectPost={handleRejectPost}
            onOpenCreatePost={() => setShowCreateModal(true)}
            onOpenLoginModal={() => setShowLoginModal(true)}
            onOpenRegisterModal={() => setShowRegisterModal(true)}
            onViewPostDetail={setSelectedPost}
            pendingUsers={pendingUsers}
            allUsers={availableUsers}
            onApproveUser={handleApproveUser}
            onRejectUser={handleRejectUser}
          />
        )}

        {/* VIEW 5: DIGITAL TRADITIONAL ROOM */}
        {currentTab === 'TRADITION' && (
          <TraditionRoom
            traditions={INITIAL_TRADITIONS}
            currentUser={currentUser}
          />
        )}

        {/* VIEW 6: SECURITY & CYBER INFORMATION CENTER */}
        {currentTab === 'SECURITY' && (
          <SecurityCenter
            currentUser={currentUser}
            availableUsers={availableUsers}
            onSwitchUser={setCurrentUser}
            onOpenLoginModal={() => setShowLoginModal(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t-2 border-[#b45309] bg-[#1a281a] text-stone-300 py-6 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <MilitaryInsignia size="md" />
            <div>
              <p className="font-bold text-white uppercase text-xs sm:text-sm tracking-normal">
                TIỂU ĐOÀN 5 • LỮ ĐOÀN 657 • CỤC HẬU CẦN - KỸ THUẬT QUÂN KHU 7
              </p>
              <p className="text-stone-400 text-[11px] mt-0.5 leading-relaxed">
                Cổng thông tin điện tử chính thức trên Internet phục vụ công tác tuyên truyền nhân dân, tình cảm quân dân, phong trào thi đua và truyền thống vẻ vang.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 text-[11px]">
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('NEWS')}>
              Tin tức hoạt động
            </span>
            <span>•</span>
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('CIVIL_MILITARY')}>
              Tình nghĩa quân dân
            </span>
            <span>•</span>
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('TRADITION')}>
              Phòng truyền thống Lữ đoàn 657
            </span>
            <span>•</span>
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('TRAINING')}>
              Tư liệu huấn luyện thủy bộ
            </span>
            <span>•</span>
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('APPROVAL')}>
              Biên tập & duyệt bài
            </span>
            <span>•</span>
            <span className="hover:text-yellow-300 cursor-pointer" onClick={() => setCurrentTab('SECURITY')}>
              An toàn thông tin & Bảo mật
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        pendingApprovalCount={pendingApprovalBadge}
      />

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          currentUser={currentUser}
          onClose={() => setSelectedPost(null)}
          onToggleLike={handleToggleLike}
          onAddComment={handleAddComment}
        />
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <CreatePostModal
          currentUser={currentUser}
          onClose={() => setShowCreateModal(false)}
          onSubmitPost={handleCreatePost}
          onOpenLogin={() => {
            setShowCreateModal(false);
            setShowLoginModal(true);
          }}
          onOpenRegister={() => {
            setShowCreateModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}

      {/* Internal Share Modal */}
      {sharePostTarget && (
        <InternalShareModal
          post={sharePostTarget}
          currentUser={currentUser}
          onClose={() => setSharePostTarget(null)}
        />
      )}

      {/* Login & Switch User Modal */}
      {showLoginModal && (
        <LoginModal
          currentUser={currentUser}
          availableUsers={availableUsers}
          onSelectUser={setCurrentUser}
          onClose={() => setShowLoginModal(false)}
          onOpenRegisterModal={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
          onLogout={() => setCurrentUser(null)}
        />
      )}

      {/* User Registration Modal */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSubmitRegistration={handleRegisterUser}
        onOpenLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </div>
  );
}
