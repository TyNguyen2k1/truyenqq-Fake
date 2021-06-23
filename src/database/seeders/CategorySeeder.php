<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Action',
            'slug' => Str::slug('Action'),
            'description' => 'Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Adult',
            'slug' => Str::slug('Adult'),
            'description' => 'Thể loại có đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Adventure',
            'slug' => Str::slug('Adventure'),
            'description' => 'Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Anime',
            'slug' => Str::slug('Anime'),
            'description' => 'Truyện đã được chuyển thể thành film Anime',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Chuyển Sinh',
            'slug' => Str::slug('Chuyển Sinh'),
            'description' => 'Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Cổ Đại',
            'slug' => Str::slug('Cổ Đại'),
            'description' => 'Truyện có nội dung xảy ra ở thời cổ đại phong kiến.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Comedy',
            'slug' => Str::slug('Comedy'),
            'description' => 'Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Comic',
            'slug' => Str::slug('Comic'),
            'description' => 'Truyện tranh Châu Âu và Châu Mĩ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Demons',
            'slug' => Str::slug('Demons'),
            'description' => 'Demons',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Detective',
            'slug' => Str::slug('Detective'),
            'description' => 'Thể loại điều tra, trinh thám.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Doujinshe',
            'slug' => Str::slug('Doujinshe'),
            'description' => 'Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Drama',
            'slug' => Str::slug('Drama'),
            'description' => 'Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Đam Mỹ',
            'slug' => Str::slug('Đam Mỹ'),
            'description' => 'Truyện tình cảm giữa nam và nam.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Ecchi',
            'slug' => Str::slug('Ecchi'),
            'description' => 'Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Fantasy',
            'slug' => Str::slug('Fantasy'),
            'description' => 'Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Ghender BenDer',
            'slug' => Str::slug('Ghender BenDer'),
            'description' => 'Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam...',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Harem',
            'slug' => Str::slug('Harem'),
            'description' => 'Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Hictorical',
            'slug' => Str::slug('Hictorical'),
            'description' => 'Thể loại có liên quan đến thời xa xưa, lịch sử.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Horror',
            'slug' => Str::slug('Horror'),
            'description' => 'Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Huyền Huyễn',
            'slug' => Str::slug('Huyền Huyễn'),
            'description' => 'Truyện có yếu tố phép thuật, kỳ ảo… được đặt trong bối cảnh siêu tưởng (tiên giới, ma giới…)',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Isekai',
            'slug' => Str::slug('Isekai'),
            'description' => 'Isekai, đôi khi còn được gọi là xuyên không hay chuyển sinh, là một tiểu thể loại light novel, manga, anime và video game kỳ ảo của Nhật Bản, xoay quanh một người bình thường được đưa đến hoặc bị mắc kẹt trong một vũ trụ song song.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Josei',
            'slug' => Str::slug('Josei'),
            'description' => 'Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Mafia',
            'slug' => Str::slug('Mafia'),
            'description' => '',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Magic',
            'slug' => Str::slug('Magic'),
            'description' => 'Thể loại giả tưởng có tồn tại những sức mạnh siêu nhiên như thần chú, gây phép, vòng tròn ma thuật... ',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Manhua',
            'slug' => Str::slug('Manhua'),
            'description' => 'Truyện tranh của Trung Quốc',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Manhwa',
            'slug' => Str::slug('Manhwa'),
            'description' => 'Truyện tranh Hàn Quốc, đọc từ trái sang phải',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Martial Arts',
            'slug' => Str::slug('Martial Arts'),
            'description' => 'Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Mature',
            'slug' => Str::slug('Mature'),
            'description' => 'Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Military',
            'slug' => Str::slug('Military'),
            'description' => 'Truyện Quân Sự',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Mystery',
            'slug' => Str::slug('Mystery'),
            'description' => 'Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Ngôn Tình',
            'slug' => Str::slug('Ngôn Tình'),
            'description' => 'Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'One Shot',
            'slug' => Str::slug('One Shot'),
            'description' => 'Những truyện ngắn, thường là 1 chapter',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Psychological',
            'slug' => Str::slug('Psychological'),
            'description' => 'Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Romance',
            'slug' => Str::slug('Romance'),
            'description' => 'Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'School Life',
            'slug' => Str::slug('School Life'),
            'description' => 'Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Sci-fi',
            'slug' => Str::slug('Sci-fi'),
            'description' => 'Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Seinen',
            'slug' => Str::slug('Seinen'),
            'description' => 'Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Shoujo',
            'slug' => Str::slug('Shoujo'),
            'description' => 'Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Shoujo ai',
            'slug' => Str::slug('Shoujo ai'),
            'description' => 'Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Shounen',
            'slug' => Str::slug('Shounen'),
            'description' => 'Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Shounen AI',
            'slug' => Str::slug('Shounen AI'),
            'description' => 'Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Slice of life',
            'slug' => Str::slug('Slice of life'),
            'description' => 'Nói về cuộc sống đời thường',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Smut',
            'slug' => Str::slug('Smut'),
            'description' => 'Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Sports',
            'slug' => Str::slug('Sports'),
            'description' => 'Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Supernatual',
            'slug' => Str::slug('Supernatual'),
            'description' => 'Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Tragedy',
            'slug' => Str::slug('Tragedy'),
            'description' => 'Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Trọng sinh',
            'slug' => Str::slug('Trọng Sinh'),
            'description' => 'Trọng sinh là thể loại mà nhân vật chính vì một lý do nào đó chết đi rồi đầu thai vào kiếp khác nhưng vẫn giữ lại được kí ức của mình ở kiếp trước.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Truyện màu',
            'slug' => Str::slug('Truyện màu'),
            'description' => 'Tổng hợp truyện tranh màu, rõ, đẹp',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Webtoon',
            'slug' => Str::slug('Webtoon'),
            'description' => 'Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Xuyên Không',
            'slug' => Str::slug('Xuyên Không'),
            'description' => 'Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Yaoi',
            'slug' => Str::slug('Yaoi'),
            'description' => 'Thể loại về tình yêu giữa đồng tính nam',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
        DB::table('categories')->insert([
            'name' => 'Yuri',
            'slug' => Str::slug('Yuri'),
            'description' => 'Thể loại về đồng tính nữ.',
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ]);
    }
}