import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article, Category } from '../../interfaces';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  stats = [
    { value: '+50', label: 'مقالة', icon: 'fa-regular fa-newspaper' },
    { value: '+10ألف', label: 'قارئ', icon: 'fa-solid fa-users' },
    { value: '4', label: 'تصنيفات', icon: 'fa-regular fa-folder-open' },
    { value: '6', label: 'كاتب', icon: 'fa-solid fa-pen-nib' }
  ];

  featuredArticles: Article[] = [
    {
      id: 1,
      title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
      excerpt: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
      category: 'إضاءة',
      readTime: '8 دقائق للقراءة',
      date: '12 يناير 2024',
      authorName: 'سالم أحمد',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80',
      isFeatured: true
    },
    {
      id: 2,
      title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
      excerpt: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
      category: 'بورتريه',
      readTime: '6 دقائق للقراءة',
      date: '8 يناير 2024',
      authorName: 'محمد علي',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
      isFeatured: true
    },
    {
      id: 3,
      title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
      excerpt: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
      category: 'مناظر طبيعية',
      readTime: '10 دقائق للقراءة',
      date: '5 يناير 2024',
      authorName: 'إبراهيم حسن',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      isFeatured: true
    }
  ];

  categories: Category[] = [
    { name: 'إضاءة', count: 3, icon: 'fa-solid fa-sun' },
    { name: 'بورتريه', count: 3, icon: 'fa-solid fa-user' },
    { name: 'مناظر طبيعية', count: 2, icon: 'fa-solid fa-mountain-sun' },
    { name: 'تقنيات', count: 5, icon: 'fa-solid fa-sliders' },
    { name: 'معدات', count: 3, icon: 'fa-solid fa-camera' }
  ];

  latestArticles: Article[] = [
    {
      id: 4,
      title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
      excerpt: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.',
      category: 'تقنيات',
      readTime: '7 دقائق للقراءة',
      date: '8 يناير 2024',
      authorName: 'داوود خالد',
      authorRole: 'مدرب تصوير',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80'
    },
    {
      id: 5,
      title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
      excerpt: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنساء صور مؤثرة بصرياً.',
      category: 'تقنيات',
      readTime: '9 دقائق للقراءة',
      date: '5 يناير 2024',
      authorName: 'ليث محمود',
      authorRole: 'فنان بصري',
      authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80'
    },
    {
      id: 6,
      title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
      excerpt: 'اكتشف كيف تحول هاتف الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
      category: 'معدات',
      readTime: '8 دقائق للقراءة',
      date: '3 يناير 2024',
      authorName: 'جمال عبد الله',
      authorRole: 'مصور ومراجع تقني',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'
    }
  ];

}
