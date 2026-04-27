import Link from 'next/link';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { blogArticles } from '@/lib/data';
import BlogImage from '@/components/ui/BlogImage';

export default function BlogPage() {
  const [featured, ...rest] = blogArticles;
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F5F0EA] pt-32 pb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Le Journal</p>
        <h1 className="font-script text-5xl md:text-7xl text-[#1A1A1A] mb-4">Le Blog Afro Queens</h1>
        <p className="text-sm font-sans text-[#6B6B6B] max-w-md mx-auto">
          Conseils capillaires, routines, astuces et inspirations pour sublimer vos cheveux naturels
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Featured */}
        {featured && (
          <div className="grid md:grid-cols-2 gap-0 mb-20 bg-[#1A1A1A] overflow-hidden group transition-all duration-500 hover:shadow-2xl">
            <div className="relative aspect-video md:aspect-auto min-h-64">
              <BlogImage src={featured.image} alt={featured.title} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-sans tracking-widest uppercase text-[#E07B39] border border-[#E07B39]/30 px-3 py-1">
                  {featured.category}
                </span>
                <span className="text-xs text-white/40 font-sans">Article vedette</span>
              </div>
              <h2 className="font-script text-3xl md:text-4xl text-white leading-tight mb-4">{featured.title}</h2>
              <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/40 text-xs font-sans">
                  <Clock size={14} />{featured.readTime} de lecture
                </div>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-xs font-sans">{featured.date}</span>
              </div>
              <Link href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-4 text-xs font-sans tracking-widest uppercase hover:border-[#E07B39] hover:text-[#E07B39] transition-all w-fit group/btn">
                Lire l&apos;article
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* Other articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map(article => (
            <article key={article.id} className="group transition-all duration-500 hover:shadow-xl bg-white border border-gray-100">
              <div className="relative aspect-video overflow-hidden">
                <BlogImage src={article.image} alt={article.title} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#E07B39]">
                    <Tag size={11} />{article.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#9E9E9E]">
                    <Clock size={11} />{article.readTime}
                  </div>
                </div>
                <h3 className="font-script text-2xl text-[#1A1A1A] leading-tight mb-3">{article.title}</h3>
                <p className="text-sm font-sans text-[#6B6B6B] leading-relaxed mb-6">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-[#9E9E9E]">{article.date}</span>
                  <Link href={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-xs font-sans text-[#E07B39] hover:gap-3 transition-all">
                    Lire <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-[#F5F0EA] p-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Newsletter</p>
          <h3 className="font-script text-4xl text-[#1A1A1A] mb-3">Ne manquez aucun conseil</h3>
          <p className="text-sm font-sans text-[#6B6B6B] mb-8 max-w-md mx-auto">
            Recevez nos articles, astuces et offres exclusives directement dans votre boîte mail
          </p>
          <form className="flex max-w-md mx-auto gap-0">
            <input type="email" placeholder="Votre adresse email"
              className="flex-1 border border-gray-200 px-5 py-4 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors"/>
            <button type="submit" className="btn-primary whitespace-nowrap">S&apos;abonner</button>
          </form>
        </div>
      </div>
    </div>
  );
}
