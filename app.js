const projects = {
  rag: {
    title: "个人项目1：汽车知识库 RAG 问答系统",
    desc: "基于汽车用户手册构建的 RAG 问答系统，支持汽车功能、配置及操作说明查询，提升用户检索效率与回答准确性。",
    goals: [],
    strategyLabel: "核心优化策略",
    techLabel: "技术栈",
    visuals: [
      { label: "系统界面", image: "ppt_assets/image10.png", alt: "智能座舱问答系统界面" },
      { label: "RAG 检索流程", image: "ppt_assets/image9.png", alt: "汽车知识库 RAG 检索流程" }
    ],
    links: [
      { label: "打开智能座舱问答 Demo", href: "http://127.0.0.1:7860/" }
    ],
    strategies: [
      { title: "多策略文本切分", detail: "结合页面规则与滑动窗口，有效减少跨页信息断裂，保证上下文完整性。" },
      { title: "混合检索", detail: "FAISS 向量检索 + BM25 关键词检索双路结合，提高专业术语与功能名称召回效果。" },
      { title: "重排序优化", detail: "使用 bge-reranker-large 对召回结果重排序，降低低相关文本干扰。" }
    ],
    techStack: ["PyPDF2", "LangChain", "FAISS", "BM25", "bge-reranker-large", "DashScope / Qwen API"]
  },
  agent: {
    title: "个人项目2：求职 Agent 智能助手",
    desc: "面向毕业生求职管理，把邮件、投递进度、待办任务、简历优化、天气节奏和长期偏好记忆整合成可恢复、可确认的个人智能助理。",
    goals: [],
    strategyLabel: "核心工作",
    techLabel: "关键技术",
    visuals: [
      { label: "系统界面", image: "assets/job-agent-preview.svg", alt: "求职备考行动台界面预览" },
      { label: "Agent 工作流", image: "ppt_assets/image10.png", alt: "求职 Agent 功能界面" }
    ],
    links: [
      { label: "打开求职备考行动台", href: "http://127.0.0.1:8765/" }
    ],
    strategies: [
      { title: "LangGraph 状态机", detail: "拆分邮件解析、进度更新、待办生成、简历优化等节点，保证流程可追踪、可恢复。" },
      { title: "工具调用封装", detail: "通过 Function Calling 与 MCP 接入邮件、网页采集、天气和本地数据工具。" },
      { title: "长期偏好记忆", detail: "memory.json 沉淀目标岗位、城市、避雷项和面试话术，反哺 JD 采集和每日陪跑。" }
    ],
    techStack: ["LangGraph", "Python HTTP API", "Function Calling", "MCP", "IMAP", "memory.json"]
  },
  aigc: {
    title: "实习项目：AIGC 图像编辑稳定性优化",
    desc: "围绕三星手机相册编辑场景，提升背景漂移、人像变形、边缘融合不自然等问题的可控性。",
    goals: [],
    strategyLabel: "核心工作",
    techLabel: "关键技术",
    visuals: [
      { label: "编辑流程", image: "ppt_assets/image3.jpeg", alt: "图像编辑流程图" },
      { label: "稳定性策略", image: "ppt_assets/image2.png", alt: "AIGC 图像编辑项目说明" }
    ],
    links: [],
    strategies: [
      { title: "Prompt 结构约束", detail: "明确编辑区域、主体保持和背景约束，降低背景漂移与五官变形。" },
      { title: "DINO 相似度筛选", detail: "基于背景相似度阈值与最多三轮重试策略，提升生成稳定性。" },
      { title: "融合后处理", detail: "针对图像拼接边缘突兀问题，引入泊松融合进行后处理调优。" }
    ],
    techStack: ["SeedDream", "DINO", "Prompt Engineering", "Poisson Blending", "Model Evaluation"]
  },
  wheelchair: {
    title: "科研项目：基于 EEG 解码的脑控抓取系统",
    desc: "基于 EEG 脑电信号解码实现机器人抓取控制，探索复杂视觉刺激与脑机交互场景下的目标识别能力。",
    goals: [
      "基于 EEG 脑电信号实现目标抓取控制",
      "探索复杂视觉刺激下的脑电解码能力",
      "提升遮挡场景中的目标识别稳定性"
    ],
    strategyLabel: "核心工作",
    techLabel: "关键技术",
    visuals: [
      { label: "系统整体框架", image: "ppt_assets/image5.png", alt: "基于 EEG 解码的脑控抓取系统整体框架" },
      { label: "实验效果", image: "ppt_assets/image7.png", alt: "高密度刺激遮挡物体实验场景" }
    ],
    links: [],
    strategies: [
      { title: "数据采集与预处理", detail: "参与高密度 EEG 数据采集，完成滤波、降噪、分段等预处理工作。" },
      { title: "时频特征提取", detail: "采用 STFT 提取多频段时频特征，提升脑电信号的可分性。" },
      { title: "脑电解码模型", detail: "基于 Transformer 架构构建解码模型，实现对抓取意图的分类识别。" },
      { title: "机器人控制集成", detail: "将解码结果映射为控制指令，驱动机械臂完成抓取动作执行。" },
      { title: "实验测试与分析", detail: "搭建实验场景，进行多轮测试，分析模型性能并持续优化算法效果。" }
    ],
    techStack: ["EEG", "STFT", "Transformer", "PyTorch", "Robot Arm", "OpenCV", "Socket (TCP/IP)"]
  }
};

const tabs = document.querySelectorAll(".project-tab");
const projectTitle = document.querySelector("#projectTitle");
const projectDesc = document.querySelector("#projectDesc");
const projectVisuals = document.querySelector("#projectVisuals");
const projectStrategies = document.querySelector("#projectStrategies");
const projectTechStack = document.querySelector("#projectTechStack");
const projectStrategyLabel = document.querySelector("#projectStrategyLabel");
const projectTechLabel = document.querySelector("#projectTechLabel");
const projectLinks = document.querySelector("#projectLinks");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const project = projects[tab.dataset.project];
    tabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    projectTitle.textContent = project.title;
    projectDesc.textContent = project.desc;
    projectVisuals.classList.toggle("with-goals", Boolean(project.goals?.length));
    projectVisuals.replaceChildren(
      ...(project.goals?.length ? [createGoalCard(project.goals)] : []),
      ...project.visuals.map((visual) => {
        const figure = document.createElement("figure");
        const caption = document.createElement("figcaption");
        const image = document.createElement("img");
        figure.className = "visual-card";
        caption.textContent = visual.label;
        image.src = visual.image;
        image.alt = visual.alt;
        figure.append(caption, image);
        return figure;
      })
    );
    projectStrategyLabel.textContent = project.strategyLabel || "核心工作";
    projectTechLabel.textContent = project.techLabel || "关键技术";
    projectStrategies.replaceChildren(
      ...project.strategies.map((strategy) => {
        const card = document.createElement("article");
        const title = document.createElement("strong");
        const detail = document.createElement("span");
        title.textContent = strategy.title;
        detail.textContent = strategy.detail;
        card.append(title, detail);
        return card;
      })
    );
    projectTechStack.replaceChildren(
      ...project.techStack.map((item) => {
        const tag = document.createElement("span");
        tag.textContent = item;
        return tag;
      })
    );
    projectLinks.replaceChildren(
      ...(project.links || []).map((link) => {
        const anchor = document.createElement("a");
        anchor.className = "demo-link";
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
        anchor.textContent = link.label;
        return anchor;
      })
    );
    projectLinks.hidden = !(project.links || []).length;
  });
});

function createGoalCard(goals) {
  const card = document.createElement("section");
  const label = document.createElement("div");
  const list = document.createElement("div");
  card.className = "goal-card";
  label.className = "project-section-label";
  label.textContent = "项目目标";
  list.className = "goal-list";
  goals.forEach((goal) => {
    const item = document.createElement("article");
    const icon = document.createElement("span");
    const text = document.createElement("p");
    icon.textContent = "◎";
    text.textContent = goal;
    item.append(icon, text);
    list.appendChild(item);
  });
  card.append(label, list);
  return card;
}
