// cSpell: disable
import type { Post } from 'types'
import { POST } from '@/enums/content'

export const MockPost: Post = {
  title: 'FILM Pipeline Part 3: Post-production',
  tag: [
    'Filming',
    'CGI',
    'Visual Effects',
    '3D',
    'Pipeline',
    'Look/Color grading',
    'Compositing',
  ],
  slug: 'film-pipeline-part-3-post-production',
  featured: true,
  excerpt:
    'เรามาดูกันครับ ว่าหลังจากการถ่ายทำเสร็จสิ้นแล้ว มีขั้นตอนอะไรบ้างในช่วงของ post-production ครับ การตัดต่อ, ทำ CGI, VFX ต่างๆ ก็จะเกิดขึ้นในช่วงนี้นี่แหละ',
  date: '2019-04-02',
  createdAt: '2024-05-29T16:28:38.964408+00:00',
  updatedAt: '2024-05-31T08:52:00.443254+00:00',
  coverImage: {
    url: 'https://media.graphassets.com/bLcpiTSESBhw1lCnDUAQ',
    width: 1920,
    height: 1080,
  },
  postCategory: [
    {
      title: 'Filming',
      slug: 'filming',
      description: null,
    },
    {
      title: 'Pipeline',
      slug: 'filming-pipeline',
      description: null,
    },
    {
      title: 'Look/Color grading',
      slug: 'filming-look-color-grading',
      description: null,
    },
    {
      title: 'CGI',
      slug: 'cgi',
      description: null,
    },
    {
      title: 'Visual Effects',
      slug: 'cgi-visual-effects',
      description: null,
    },
    {
      title: '3D Modeling',
      slug: 'cgi-3d-modeling',
      description: null,
    },
    {
      title: 'Compositing',
      slug: 'cgi-compositing',
      description: null,
    },
  ],
  blocks: [
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: null,
      headingHierarchy: POST.HEADING_HIERARCHY.NONE,
      text: [
        {
          html: '<p>หลังจากการ<strong>ถ่ายทำเสร็จสิ้นแล้ว </strong>ก็จะเข้าสู่ช่วงของ post-production ครับ การตัดต่อ, ทำ CGI, VFX ต่างๆ ก็จะเกิดขึ้นในช่วงนี้นี่แหละ เรามาดูกันครับ ว่ามีขั้นตอนอะไรบ้าง</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '1. Editing',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p>พูดง่ายๆ การ Editing ก็คือการตัดต่อนั่นแหละครับ เมื่อถ่ายทำเสร็จ ไฟล์ footage ก็จะส่งต่อให้กับทีมตัดต่อ(Editor) โดยทีมนี้ หน้าที่หลักๆก็คือต้อง<strong>นำ footage ทั้งหมดมา “ตัด” และ ”ต่อ” เข้าด้วยกัน </strong>โดยคลิป Final ที่ได้นั้น จะต้องสื่อสารกับผู้กำกับ เพื่อเลือก Take ที่ดีที่สุดมาตัดให้สอดคล้องกับ Storyboard, Pre-vis, และ Script ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.RICH,
      content: {
        html: '<p>ซึ่งในหลายๆเรื่อง มักจะไม่ตัดออกมาเป็น Final ไฟล์เดียว แต่จะตัดออกมาเป็น Final draft ประมาณ 2-3 version เพื่อเป็นตัวเลือกให้กับลูกค้าครับ</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '2. Grading',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphassets.com/hnippr5aSeejYH77CeUu" alt="C_F0013-Color-Grading.jpg" title="C_F0013-Color-Grading.jpg" width="852" height="479" /><p>การ Grading หรือที่เรียกกันติดปากว่า “Color Grading” คือ <strong>การย้อมสีให้กับไฟล์ footage ของเราไปในทิศทางเดียวกัน </strong>เนื่องจากการถ่ายทำนั้น ในซีนเดียวกัน อาจจะถ่ายกันคนละเวลาตาม Breakdown ทำให้สีของไฟล์ footage ต่างกันเล็กน้อย จึงทำให้เราต้องทำการ Grading สีให้กับวิดีโอของเรา รวมทั้งยังต้อง <strong>ปรับ Mood &amp; Tone ของหนังใน Final look </strong>เพื่อให้สีออกมาตรงตาม Concept ที่ผู้กำกับต้องการสื่อด้วยครับ แบ่งได้เป็น 2 ขั้นตอน</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title:
        '2.1 Technical Grade: เกลี่ยสีขั้นต้น เพื่อให้ดูเป็นหนังเรื่องเดียวกัน',
      headingHierarchy: POST.HEADING_HIERARCHY.THREE,
      text: [
        {
          html: '<p>ในขั้นตอนนี้ งานหลักๆก็คือการเกลี่ยสีให้กับ footage ครับ โดยทีม Editor เนี่ย จะตัดต่อบน Proxy(H.264) แต่ทีม Colorist จำเป็นต้อง<strong>เกลี่ยโดยตรงจาก RAW footage</strong> ฉะนั้น ขั้นตอนนี้ ทีม Editor จึงจำเป็นต้องส่งต่อไฟล์ให้ทีม Grading ในรูปแบบของ EDL, XML เพื่อ Conform ไฟล์ของเราทั้ง clip, roll, และ speed เพื่อให้ทีม Grading เกลี่ยสีได้ตรงตามที่ตัดไว้ และส่งต่อไฟล์ graded ไปขั้นตอนต่อไปได้อย่างครบถ้วน</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '2.2 Creative Grade: ย้อมสี Mood & Tone (Color look) ให้กับหนัง',
      headingHierarchy: POST.HEADING_HIERARCHY.THREE,
      text: [
        {
          html: '<p>ขั้นตอนนี้จะ<strong>เกิดหลัง Composite </strong>ครับ เป็นการย้อมสีให้กับหนังของเรา เพื่อคนดูเกิดอารมณ์ร่วมไปกับหนัง ซึ่ง mood &amp; tone ที่ใช้ จะต้อง<strong>สอดคล้องกับ message ที่ผู้กำกับต้องการจะสื่อ</strong> โดยขั้นนี้ จะเป็นขั้นที่ Director of photography, Director และ Colorist ทำงานร่วมกัน เพื่อให้ได้ Look ของภาพตรงตามที่ DOP คิดไว้ครับ</p>',
        },
        {
          html: '<p>เช่น โทนสีร้อนๆ ก็จะเหมาะกับหนัง Action ส่วนโทนสีน้ำเงินก็จะให้อารมณ์ของหนัง Drama</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>โดยขั้นตอนนี้ จะนำค่าของกล้อง เช่น focal length, ขนาดเซนเซอร์จาก Camera report มาใช้ในการคำนวณด้วยครับ เพื่อให้การ Track นั้น มีความถูกต้องและแม่นยำ</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '3. Plate preparation',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/pJxc3zSfuEALgzLzXYrA" alt="C_F0013-Film-production.jpg" title="C_F0013-Film-production.jpg" width="852" height="495" /><p>ในการถ่ายทำในบางครั้ง อาจจะ<strong>มีอุปกรณ์ต่างๆที่ใช้ในกองถ่ายติดเข้าไปอยู่ใน frame ด้วย</strong> เช่น safety equipment, camera ฯลฯ แน่นอนว่ามันเป็นสิ่งที่เราไม่ต้องการให้อยู่ในหนัง เราจึงจำเป็นจะต้องมีทีม preparation ในกา<strong>รลบสิ่งเหล่านี้ออกไป</strong> ก่อนที่จะส่งให้ทีม compositor ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '4. Rigging',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/FDrOJZwYTRKo8cT5HyKK" alt="C_F0013-Rigging.jpg" title="C_F0013-Rigging.jpg" width="852" height="444" /><p>หลังจากที่ทีม Modeling ได้ทำ 3D model เสร็จแล้ว ก็จะมาถึงขั้นตอนของการใส่ rig หรือใส่โครงกระดูกให้กับ model ของเรา เปรียบเหมือนการ setup ให้เราสามารถกำหนดการเคลื่อนไหว, Interact ท่าทางต่างๆ ให้เป็นไปตามที่เราต้องการ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '5. Tracking and match-moving',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/cRgLZp9gSOqf1YRWkxFw" alt="C_F0013-tracking.jpg" title="C_F0013-tracking.jpg" width="852" height="479" /><p>ในการถ่ายทำนั้น กล้องจะมีการเคลื่อนที่ และมุมมองของ frame จะเปลี่ยนไป เพื่อให้การ Composite เป็นไปอย่างถูกต้อง เราจำเป็นต้อง <strong>Tracking เพื่อทราบว่าวัตถุต่างๆในเฟรม และกล้องของเรา เคลื่อนที่อย่างใรใน 3D-space</strong> เพื่อที่เวลาเราใส่ CG ลงไป การเคลื่อนไหวและ Perspective ต่างๆมันจะได้ match ไปกับ footage ของเรา</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>โดยขั้นตอนนี้ จะนำค่าของกล้อง เช่น focal length, ขนาดเซนเซอร์จาก Camera report มาใช้ในการคำนวณด้วยครับ เพื่อให้การ Track นั้น มีความถูกต้องและแม่นยำ</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '6. Animation',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/R9TLkNSTTcuNCI5ZB41X" alt="C_F0013-Animation.jpg" title="C_F0013-Animation.jpg" width="852" height="525" /><p>Animation หลายคนคงคุ้นชินกับคำนี้เป็นอย่างดี กล่าวก็คือการ<strong>สร้างการเคลื่อนใหวให้กับ model </strong>นั่นแหละครับ ไม่ว่าจะเป็นตัวละครต่างๆให้เคลื่อนไหวดูมีชิวิต หรือยานพาหนะต่างๆให้เคลื่อนไหวราบรื่นและสมจริง</p>',
        },
        {
          html: '<p>โดย model ที่ใช้ ก็จะ<strong>ใช้โมเดลที่มีความละเอียดพอเหมาะ </strong>ไม่ได้ใช้โมเดลจริงๆทั้งหมดในการทำงาน เพราะงานหลักๆคือการกำหนดการเคลื่อนไหวและ overall ให้ดูสมจริง <strong>หากใช้โมเดลจริงๆ</strong>ที่มีความละเอียดสูงเกินไป <strong>อาจทำให้เครื่อง Workstation ของเราทำงานช้าได้ครับ</strong> อีกทั้งยังทำให้เสียเวลาในการ render อีกด้วย</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '7. Effects Animation (VFX Simulation)',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p>VFX Simulation หรือการ effects พิเศษด้วยคอมพิวเตอร์ เช่น น้ำ, ไฟ, ตึกถล่ม เป็นต้น หากใครได้ติดตามบล็อกคงผม คงได้อ่านบทความเรื่อง <strong>โปรแกรม Houdini</strong> กันไปแล้ว</p><p>งานหลักๆของทีมนี้ก็คือ<strong>การจำลอง Effects ด้วยคอมพิวเตอร์</strong>ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.RICH,
      content: {
        html: '<p>อยากได้ Effects อะไรก็จำลองขึ้นมา</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>ด้วยกฎฟิสิกส์ตามธรรมชาติ(หรืออาจจำกำหนดเอง) เช่น จำลองไฟ ก็จะเรียกว่า <strong>PyroSim</strong> จำลองของแตกหัก ก็จะเรียกว่า Disintegration ครับ</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: null,
      headingHierarchy: POST.HEADING_HIERARCHY.NONE,
      text: [
        {
          html: '<p>ซึ่งในการจำลองนั้น เราจะ<strong>นำ Model animated และค่า Tracking ต่างๆ มาใช้ในการคำนวณด้วย</strong> ตัวอย่างเช่นหนังเรื่อง Harry Potter เวลาร่ายคาถา, Particle ที่เราจำลองขึ้นมา จะต้องเคลื่อนไหวติดไปกับไม้กายสิทธิ์และ match move ไปกับเฟรมครับ เวลา render ออกมา ก็จะได้มุมมอง, ขนาด และการเคลื่อนไหวที่สมจริง และส่งต่อให้ทีม Compositor ทำการ Composite ต่อไป</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '8. Texturing',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/Dun2pjrWSnKoWbJmMCyU" alt="C_F0013-Texturing.jpg" title="C_F0013-Texturing.jpg" width="852" height="480" /><p>ในขั้นตอนการ modeling นั้น เราจะได้ model ที่ที่ปั้นขึ้นมาเฉยๆ โดยไม่มีลวดลายบนพื้นผิว จึงทำให้เราต้องนำมาเข้าสู่อีกขั้นตอน นั่นก็คือการ Texturing พูดง่ายๆมันก็คือ<strong>การวาดรูปลงบนพื้นผิวของ model </strong>ของเราครับ <strong>โดยจะมีรูปภาพที่เป็น Reference มาใช้ในการอ้างอิง</strong>การใส่ texture ให้กับ model</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.RICH,
      content: {
        html: '<p>โดย resolution ของไฟล์ texture ที่จะต้องใช้นั้น ก็จะแตกต่างกันออกไป</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: null,
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p>หากใช้มุมกล้องระยะไกล (เช่น Extreme long shot) ก็ไม่จำเป็นต้องละเอียดมาก แต่หากใช้มุมกล้องระยะใกล้ (เช่น Close up) ก็จำเป็นที่จะต้องใช้ Texture ความละเอียดสูงครับ ซึ่งบางครั้งก็สูงถึง 8k เลยทีเดียว</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '9. Look Development (LookDev)',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/wzpDafFXTk2RYmfExVuZ" alt="C_F0013-Look-Development.jpg" title="C_F0013-Look-Development.jpg" width="852" height="479" /><p>คำนี้หลายๆคนอาจจะยังไม่คุ้นหู เพราะเราไม่ค่อยได้ใช้มันเท่าไหร่ LookDev คือขั้นตอนการนำ texture ที่ได้ มา mapping เข้ากับ model และใส่ shader ให้กับมัน</p><p>พูดง่ายๆ มันก็คือการ<strong>สร้าง final look ให้กับ model</strong> ว่ามันจะออกมาในรูปแบบไหน เช่นการปรับ reflectivity, roughness ฯลฯ เพื่อให้ model ที่ได้นั้น ตรงตามความต้องการของ Director มากที่สุด</p><p>โดยขั้นตอนการ LookDev นั้น <strong>บางครั้งจะมีทีม R&amp;D (Research and Development) ทำงานร่วมด้วย</strong> เพื่อหาข้อมูลและพัฒนา model ของเรา ให้ได้ final look ที่ตรงความต้องการที่สุด</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '10. Lighting and Rendering',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/oVItxKocSza1aGZHZzBd" alt="C_F0013-Lighting-and-Rendering.jpg" title="C_F0013-Lighting-and-Rendering.jpg" width="852" height="491" /><p>ขนาดตอนถ่ายทำยังจัดแสง แล้วทำไม post-production จะไม่จัดละครับ? ซึ่งในขั้นตอนนี้ lighting artist จะนำค่าจาก LookDev และภาพ HDR Environment ที่ถ่ายไว้มา<strong>ทำ shading และ lighting</strong> เพื่อให้เวลา render ออกมาแล้ว<strong>ตรงตาม footage ของเราที่สุด</strong></p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>และเมื่อเสร็จแล้ว ก็จะทำ render แบบแยก pass เช่น Alpha channel, Color, Diffuse ฯลฯเพื่อให้เกิดความสะดวกในการใช้งาน และส่งให้ทีม Compositor ต่อไป</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '11. Element shoots',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/DXWRLMuZQ2SCXfWQLm7a" alt="C_F0013-Element-shoots.jpg" title="C_F0013-Element-shoots.jpg" width="852" height="479" /><p>ในบางครั้ง การทำ VFX ก็ไม่ได้ผลลัพท์ตามที่เราต้องการ หรืออาจจะด้วยเหตุผลการทำ VFX นั้นใช้เวลาหรือเสียงบประมาณ เราจึงจำเป็นต้องมีการ<strong>ถ่าย Effects ที่เป็น RAW footage จริงๆ</strong> เช่น ไฟ หรือฝุ่นควันต่างๆ ขึ้นมา ซึ่ง footage ที่ได้นั้น ก็จะมีความสมจริงกว่าการทำ CG ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '12. Matte Painting',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/iKxIrKTTPOhgYYubzvKA" alt="C_F0013-Matte-Painting.jpg" title="C_F0013-Matte-Painting.jpg" width="852" height="479" /><p>ในสมัยก่อนเนี่ย การสร้างวิวทิวทัศน์ไม่ได้สะดวกโดยใช้คอมพิวเตอร์เหมือนในปัจจุบัน การสร้างวิวต่างๆจึงต้องวาดขึ้นมาจริงๆ เราเรียกว่า matte painting ครับ และมันก็ติดปากมาจนถึงปัจจุบัน</p>',
        },
        {
          html: '<p>ในการถ่ายทำนั้น บางครั้งอาจมีข้อจำกัดของสถานที่ด้วยเหตุงบประมาณหรือเวลาใดๆก็แล้วแต่ หรืออาจเพราะสถานที่ที่ถ่ายทำไม่สามารถถ่ายได้ตรงตามที่คิดไว้ในช่วง Pre-production ขั้นตอนนี้จึงเป็นหน้าที่ของคนทำ matte painting ครับ นั่นก็คือการ<strong>วาดวิวใหม่ แทนวิวเดิมใน footage ที่ถ่ายมา</strong></p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '13. Rotoscoping',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<h1></h1><img src="https://media.graphcms.com/ta83e3tTRSgyhBPqFMnb" alt="C_F0013-Rotoscoping.jpg" title="C_F0013-Rotoscoping.jpg" width="852" height="494" /><p>ในหลายๆครั้ง เมื่อเราวาง VFX หรือ model ลงในฉาก เราจะมี <strong>Foreground</strong> หรือวัตถุต่างๆ<strong>ที่อยู่ข้างหน้า ที่ไม่ต้องการให้ Effects เหล่านั้นมาทับ</strong> ขั้นตอนนี้(Rotoscoping) จึงเป็นการ<strong>วาดกรอบให้กับ Foreground</strong> ของเรานั่นเองครับ โดยการ Roto นั้น จะวาดเส้นแบบ frame by frame เพื่อให้เกิดความแม่นยำ <strong>เวลาวาง CG Elements จะได้ไปอยู่ข้างหลัง</strong> ไม่ทับกับ FG ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>และในบางฉาก ที่ถ่ายมาเป็น Green หรือ Bluescreen หากทำการ Keying แล้วสำเร็จ ก็ไม่จำเป็นต้องทำ Rotoscoping ครับ</p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '14. Compositing',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/NbGqOzVRTagqISWtxdgB" alt="C_F0013-Compositing.jpg" title="C_F0013-Compositing.jpg" width="852" height="474" /><p>ขั้นตอนนี้ ถือเป็นขั้นตอนสุดท้ายแล้วละครับ (แต่ก็ยังไม่ถ้ายสุด เพราะต้องส่งต่อไป Creative grade) Compositing เป็น<strong>ขั้นตอนที่จะนำทุกๆอย่างมารวมเข้าด้วยกัน</strong> เพื่อจัดองค์ประกอบภาพ(Composition) <strong>ให้ได้ final shot ตามที่คิดไว้</strong> โดยคนที่เป็น Compositor จะต้องเข้าใจองค์ประกอบศิลป์เป็นอย่างดี เมื่อทำ Composite เสร็จ ก็จะส่งต่อให้ VFX supervisor และ Director อนุมัติต่อไป</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '15. Foley Artist',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/P0rSZKnOTIKOLceBOfcz" alt="C_F0013-Foley-Artist.jpg" title="C_F0013-Foley-Artist.jpg" width="852" height="562" /><p>อีกสิ่งหนึ่งที่สำคัญไม่แพ้ภาพ นั่นก็คือ “เสียง” ครับ ในการถ่ายทำนั้น ก็จะมี<strong>เสียงต่างๆมากมายในซีน</strong> เช่นเสียงเปิดประตู, เสียงเดิน, เสียงเปิดสวิตช์ เป็นต้น ซึ่งถ้าเรานำเสียงนี้จากไฟล์ footage เลยเนี่ย ก็จะมีความดังไม่มากพอ อีกทั้งยังไม่ชัดเจน ไม่ได้อรรถรสอีก เราจึง<strong>จำเป็นต้องสร้างเสียงเหล่านี้ขึ้นมาใหม่</strong> โดยเสียงเหล่านี้จะถูกปรุงแต่งขึ้นในขั้นตอนหลังการถ่ายทำหรือ Post Production โดย โฟลีย์อาร์ตทิส (Foley Artist)</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '16. Sound Effects and Score',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/Khg8IGvGSCm4Doyv9odr" alt="C_F0013-movie-score.jpg" title="C_F0013-movie-score.jpg" width="852" height="479" /><p>หนังทุกเรื่อง จะมีเพลงประกอบหนัง หรือที่เรียกว่า “Score” ซึ่งเป็น <strong>Sound ที่เพิ่มอรรถรสให้กับหนัง</strong> เช่นหนัง Action เพลงประกอบก็จะมีจังหวะที่มันส์, bpm ที่สูง เพื่อสร้างความตื่นเต้นให้กับคนดู ซึ่งเพลงประกอบเหล่านี้ ก็จะ<strong>ถูกออกแบบและสร้างโดย Composer</strong> ครับ ซึ่งในหลายๆเรื่องนั้น จะ<strong>สร้างเพลงประกอบโดยการเล่นสด</strong> เรียกได้ว่ายกทั้งวง Orchestra มาเล่นกันเลยที่เดียว เพลงเประกอบหนัง เป็นอีกส่วนนึงที่สำคัญมากๆ หากไม่มีละก็ หนังก็จะเงียบและน่าเบื่อไปโดยทันที</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.QUOTE,
      quoteType: POST.QUOTE.BLOCK,
      content: {
        html: '<p>ซึ่งในบางซีน อาจจะดูเหมือนจะเงียบ แต่จริงๆแล้วมันไม่เงียบซะทีเดียว เพราะมีเสียงที่เรียกว่า <strong>Ambient</strong> อยู่ครับ ซึ่งเสียงที่ว่านี้ มันก็เสียงบรรยากาศ ที่สร้างความรู้สึกให้กับคนดูในซีนนั้นๆ ซึ่งบางครั้ง มันก็<strong>ถูกบันทึกจากสถานที่จริง</strong> และบางครั้งมันก็<strong>ถูกสร้างขึ้นด้วยคอมพิวเตอร์ หรือที่เรียกว่าการ Synthesis</strong></p><p></p>',
      },
    },
    {
      blockType: POST.BLOCK_TYPE.SEPARATOR,
      separatorType: POST.SEPARATOR.DOT,
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: '17. Finalize',
      headingHierarchy: POST.HEADING_HIERARCHY.TWO,
      text: [
        {
          html: '<p></p><img src="https://media.graphcms.com/b5FIT1QYQja5VPyqSSR4" alt="C_F0013-Finalize.jpg" title="C_F0013-Finalize.jpg" width="852" height="639" /><p>และเมื่อทุกอย่างเสร็จเรียบร้อย, creative grade เสร็จสิ้น ได้ <strong>Final look แล้ว ก็จะนำมารวมกับ Sound</strong> เพื่อให้ได้วิดีโอที่เสร็จสมบูรณ์ครับ เพื่อเสร็จสิ้นกระบวนการทั้งหมด</p><p>และหากเพื่อนๆมีข้อคิดเห็น, คำถาม หรืออยากแลกเปลี่ยนใดๆ ก็คอมเม้นเข้ามาได้ครับ</p>',
        },
      ],
    },
    {
      blockType: POST.BLOCK_TYPE.CONTENT,
      title: null,
      headingHierarchy: 'NONE',
      text: [
        {
          html: '<p><strong>Reference from</strong> Andrew-Whitehurst, Isaacbotkin, and Premiumbeat</p>',
        },
      ],
    },
  ],
  relatedPosts: [],
}
