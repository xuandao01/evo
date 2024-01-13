const res = {
    vi: {
        menubar: [
            {
                name: 'Trang chủ',
                router: ''
            },
            {
                name: 'Khóa học',
                router: 'courses'
            },
            {
                name: 'Giáo viên',
                router: 'lecturers'
            },
            {
                name: 'Sự kiện',
                router: 'trial'
            },
            {
                name: 'Tin tức',
                router: 'news'
            },
            {
                name: 'Về chúng tôi',
                router: 'introduce'
            },
            {
              name: 'Hỏi đáp AI',
              router: 'ai'
          }
        ],

        menuButton: {
            action1: {
                name: 'Góc học tập'
            },
            action2: {
                name: 'Đăng nhập'
            }
        },
        courseChild: [
            {
              id: 1,
              label: 'Lập trình cho trẻ em từ 6 - 17 tuổi',
              // children: [
              //   {
              //     id: 4,
              //     label: 'Lập trình Scratch',
              //     children: [
              //       {
              //         id: 9,
              //         label: 'Lập trình Scratch Basic',
              //       },
              //       {
              //         id: 10,
              //         label: 'Lập trình Scratch Advanced',
              //       },
              //       {
              //         id: 11,
              //         label: 'Lập trình Scratch Intensive',
              //       },
              //     ],
              //   },
              //   {
              //     id: 5,
              //     label: 'Lập trình Game',
              //     children: [
              //       {
              //         id: 12,
              //         label: 'Lập trình Game Basic',
              //       },
              //       {
              //         id: 13,
              //         label: 'Lập trình Game Advanced',
              //       },
              //       {
              //         id: 14,
              //         label: 'Lập trình Game Intensive',
              //       },
              //     ],
              //   },
              //   {
              //     id: 51,
              //     label: 'Lập trình App',
              //     children: [
              //       {
              //         id: 52,
              //         label: 'Lập trình App Basic',
              //       },
              //       {
              //         id: 53,
              //         label: 'Lập trình App Advanced',
              //       },
              //       {
              //         id: 54,
              //         label: 'Lập trình App Intensive',
              //       },
              //     ],
              //   },
              //   {
              //     id: 6,
              //     label: 'Lập trình Web',
              //     children: [
              //       {
              //         id: 12,
              //         label: 'Lập trình Web Basic',
              //       },
              //       {
              //         id: 13,
              //         label: 'Lập trình Web Advanced',
              //       },
              //       {
              //         id: 14,
              //         label: 'Lập trình Web Intensive',
              //       },
              //     ],
              //   },
              // ],
            },
            {
              id: 2,
              label: 'Lập trình cho người lớn',
              children: [
                {
                  id: 7,
                  label: 'Lập trình Front-end',
                },
                {
                  id: 8,
                  label: 'Lập trình Back-end',
                },
                {
                  id: 8,
                  label: 'Lập trình Fullstack',
                },
              ],
            },
            {
              id: 3,
              label: 'Chương trình theo bộ giáo dục',
              children: [
                {
                  id: 15,
                  label: 'Giáo dục tiểu học',
                },
                {
                  id: 16,
                  label: 'Giáo dục THCS',
                },
                {
                  id: 17,
                  label: 'Giáo dục THPT',
                },
              ],
            },
        ],
        courseSection2: [
          {
            logo: 'gs-icon',
            title: 'Học Với Gia Sư',
            content: ['Học gia sư 1 kèm 1', 'Học gia sư 1 kèm 1 nhóm'],
            action: 'Xem chi tiết'
          },
          {
            logo: 'teacher-icon',
            title: 'Lớp Học Với Giáo Viên',
            content: ['Học bổ trợ các môn học theo chương trình Bộ GD với giáo trình được xây dựng bởi các thầy cô hàng đầu'],
            action: 'Xem chi tiết'
          },
          {
            logo: 'dev-kid-icon',
            title: 'Khoá Học Lập Trình Cho Trẻ Em',
            content: ['Học kiến thức lập trình, làm game từ cơ bản cho trẻ em'],
            action: 'Xem chi tiết'
          },
          {
            logo: 'dev-icon',
            title: 'Khoá Học Lập Trình Người Lớn',
            content: ['Học kiến thức lập trình chuyên nghiệp dành cho sinh viên và người đi làm'],
            action: 'Xem chi tiết'
          },
          {
            logo: 'ielts-icon',
            title: 'Học và luyện thi IELTS',
            content: ['Giúp học sinh từ mất gốc tiếng Anh đạt đến 8.0 IELTS với lộ trình tinh gọn 4 cấp độ.'],
            action: 'Xem chi tiết'
          },
          {
            logo: 'learn-icon',
            title: 'Học Luyện Thi',
            content: ['Luyện thi vào lớp 10', 'Luyện thi đại học'],
            action: 'Xem chi tiết'
          },
        ],

        courseCarousel: [
          {
            logo: 'scratch-icon',
            title: 'Lập trình scratch',
            content: ['🔥 Khóa học nhằm giúp các em phát triển kỹ năng tư duy logic, sáng tạo, và giải quyết vấn đề thông qua lập trình.', '🔥 Hướng dẫn các em thiết kế và xây dựng các dự án kỹ thuật số độc đáo.'],
          },
          {
            logo: 'game-dev-icon',
            title: 'Lập trình game',
            content: ['🏹 Khóa học này mục tiêu giúp các em hiểu cách lập trình và xây dựng trò chơi từ đầu đến cuối.', '🏹 Hướng dẫn trẻ em phát triển kỹ năng tư duy logic, sáng tạo và quản lý dự án.'],
          },
          {
            logo: 'app-dev-icon',
            title: 'Lập trình app',
            content: ['📲 Khóa học này mục tiêu giúp trẻ em hiểu cách hoạt động của các ứng dụng di động và tạo ra các ứng dụng đơn giản.', '📲 Hướng dẫn trẻ em phát triển kỹ năng tư duy logic, sáng tạo và giải quyết vấn đề thông qua việc lập trình ứng dụng.'],
          },
          {
            logo: 'web-dev-icon',
            title: 'Lập trình web',
            content: ['💻 Giúp trẻ học viên hiểu cách hoạt động của các trang web và tạo ra các trang web đơn giản.', '💻 Hướng dẫn trẻ em phát triển kỹ năng tư duy logic, sáng tạo và giải quyết vấn đề thông qua lập trình web.'],
          },
          {
            logo: 'python-dev-icon',
            title: 'Lập trình python cơ bản',
            content: ['🔎 Mục tiêu của khóa học này là giúp các em hiểu cách lập trình hoạt động và phát triển kỹ năng cơ bản trong Python', '🔎 Giúp các em hiểu về ngôn ngữ lập trình và quy trình phát triển phần mềm.'],
          },
          {
            logo: 'robotic-icon',
            title: 'Robotics',
            content: ['🔬 Mục tiêu của khóa học này là giúp các em hiểu về lập trình và kiểm soát robot.', '🔬 Giúp các em hiểu về cách hoạt động của robot, các cảm biến và ứng dụng trong thế giới thực.'],
          }
        ],

        section4Content: [
          '👉 Học viên có nhu cầu tham gia các khóa học',
          '👉 Học viên muốn tìm hiểu và trải nghiệm chương trình học tại EVO',
          '👉 Phụ huynh muốn định hướng cho con thông qua các khóa học tại EVO',
          '👉 Sinh viên IT mất gốc, thiếu định hướng cụ thể',
          '👉 Người đi làm muốn chuyển ngành sang IT'
        ],

        dev18: {
          frontend: ['html-icon', 'css-icon', 'js-icon', 'vuejs-icon', 'reactjs-icon', 'angular-icon'],
          restfulapi: ['api-icon', 'restful-icon', 'postman-icon'],
          backend: ['oop-icon', 'cs-icon', 'java-icon', 'node-icon'],
          database: ['sql-icon', 'mysql-icon', 'postgre-icon', 'mongo-icon'],
        }
    },
    en: {

    },

    sheetAPI: 'https://script.google.com/macros/s/AKfycbwjkgyNCM22StD8sUM2d55FT7kqTn1ZrXyN8cMJHhDqSIZfSLh4cOdSlTGf-uarH9KT/exec'
}

export default res;