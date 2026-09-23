import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  selectedCategory = signal<string>('الكل');
  searchQuery = signal<string>('');

  categories = ['الكل', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

  articles: Article[] = [
    {
      id: 1,
      title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
      excerpt: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
      category: 'إضاءة',
      readTime: '8 دقائق للقراءة',
      date: '12 يناير 2024',
      authorName: 'سالم أحمد',
      authorRole: 'مصور طبيعة',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80'
    },
    {
      id: 2,
      title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
      excerpt: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
      category: 'بورتريه',
      readTime: '6 دقائق للقراءة',
      date: '8 يناير 2024',
      authorName: 'محمد علي',
      authorRole: 'مصور بورتريه',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80'
    },
    {
      id: 3,
      title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
      excerpt: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
      category: 'مناظر طبيعية',
      readTime: '10 دقائق للقراءة',
      date: '5 يناير 2024',
      authorName: 'إبراهيم حسن',
      authorRole: 'رحالة ومصور',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
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

  filteredArticles = computed(() => {
    const cat = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();

    return this.articles.filter(article => {
      const matchesCat = cat === 'الكل' || article.category === cat;
      const matchesQuery = !query || 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCat && matchesQuery;
    });
  });

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
