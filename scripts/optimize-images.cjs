const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const OPTIMIZED_DIR = path.join(__dirname, 'public', 'images-optimized');

// WebP quality settings
const QUALITY = 80;

// Files to convert (banner/hero/product images that are large)
const TARGETS = [
  'hero-bg.jpg',
  'about-banner.jpg',
  'case-banner.jpg',
  'products-banner-bg.jpg',
  'service-equipment-full.jpg',
  'service-inspection-full.jpg',
  'service-licensing-full.jpg',
  'case-photo-1.jpg',
  'case-photo-2.jpg',
  'case-photo-3.jpg',
  'case-photo-4.jpg',
  'product-algorithm.jpg',
  'partner-1.png',
  'partner-2.png',
  'partner-3.png',
  'home-case.jpg',
];

async function optimize() {
  if (!fs.existsSync(OPTIMIZED_DIR)) {
    fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
  }

  const results = [];

  for (const file of TARGETS) {
    const srcPath = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(srcPath)) {
      console.log(`  SKIP (not found): ${file}`);
      continue;
    }

    const originalSize = fs.statSync(srcPath).size;
    const ext = path.extname(file).toLowerCase();

    // Banners/hero: resize to 1920w, convert to WebP
    // Product/case photos: resize to 1200w, convert to WebP
    // Logos/partners (PNG): keep original size, convert to WebP
    const isBanner = file.includes('banner') || file.includes('hero');
    const isLogo = file.includes('logo') || file.includes('partner');
    const width = isBanner ? 1920 : isLogo ? null : 1200;

    let pipeline = sharp(srcPath);
    if (width) {
      pipeline = pipeline.resize(width, undefined, { withoutEnlargement: true, fit: 'inside' });
    }

    const outName = file.replace(ext, '.webp');
    const outPath = path.join(OPTIMIZED_DIR, outName);

    const webpOpts = { quality: QUALITY };
    if (isLogo) {
      webpOpts.lossless = true;
    }

    await pipeline.webp(webpOpts).toFile(outPath);

    const optimizedSize = fs.statSync(outPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    results.push({
      file,
      originalKB: (originalSize / 1024).toFixed(1),
      optimizedKB: (optimizedSize / 1024).toFixed(1),
      savings: `${savings}%`,
    });

    console.log(`  OK ${file} → ${outName} (${(originalSize / 1024).toFixed(0)}KB → ${(optimizedSize / 1024).toFixed(0)}KB, -${savings}%)`);
  }

  console.log('\n--- Summary ---');
  console.table(results);
}

optimize().catch(console.error);
