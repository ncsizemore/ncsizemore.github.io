const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function parseRmdFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsedMatter = matter(fileContent);

  // Try multiple methods to extract abstract/description
  const abstractPatterns = [
    // Pattern for projects with ## Abstract
    /## Abstract\n>\s*(.*?)(?=\n## Software|\n---)/s,
    // Pattern for HLB model with section description
    /# Multi-scale Stochastic Spread of HLB\n\n(.*?)(?=\n# Overview of Model|\n---)/s,
    // Fallback to content between first set of ---
    /---\n(.*?)(?=\n---)/s
  ];

  let abstract = 'No description available.';
  for (const pattern of abstractPatterns) {
    const match = fileContent.match(pattern);
    if (match) {
      abstract = match[1].trim();
      break;
    }
  }

  // Extract status
  const statusPatterns = [
    /\*\*Status:\*\*\s*(.*?)(?=\n---)/s,
    /\*\*Status:\*\*\s*(.*?)$/s
  ];

  let status = 'No status provided';
  for (const pattern of statusPatterns) {
    const match = fileContent.match(pattern);
    if (match) {
      status = match[1].trim();
      break;
    }
  }

  return {
    title: parsedMatter.data.title,
    date: parsedMatter.data.date,
    slug: parsedMatter.data.slug,
    status: status,
    abstract: abstract,
    softwareLink: parsedMatter.content.match(/\[`(.*?)`\]\((.*?)\)/)
      ? parsedMatter.content.match(/\[`(.*?)`\]\((.*?)\)/)[0]
      : '',
    bibliography: parsedMatter.data.bibliography || [],
    rawContent: parsedMatter.content
  };
}

function convertProjectsToJson(contentDir) {
  const projectFolders = [
    'deception',
    'microbiome',
    'ai-text',
    'spectral',
    'group-partitions',
    'hlb-model'
  ];

  const projects = {};

  projectFolders.forEach(folder => {
    const filePath = path.join(contentDir, folder, 'index.Rmd');
    if (fs.existsSync(filePath)) {
      try {
        projects[folder] = parseRmdFile(filePath);
        console.log(`Parsed project: ${folder}`);
      } catch (error) {
        console.error(`Error parsing ${folder}: ${error.message}`);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  });

  const outputPath = path.join(__dirname, 'research-projects.json');
  fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
  console.log(`Saved research projects to: ${outputPath}`);
}

// Pass the absolute path to the content directory
convertProjectsToJson('/Users/cristina/wiley/Documents/ncsizemore.github.io_hugo.files/content');
