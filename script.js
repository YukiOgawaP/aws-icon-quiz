// AWS サービスのデータ - カテゴリ別に整理
const awsServicesByCategory = {
    // Easy レベル - Cloud Practitioner や SAA レベルの基本的なサービス
    easy: [
        { name: "Amazon S3", icon: "png-512/Storage/Simple-Storage-Service.png", category: "Storage" },
        { name: "Amazon EC2", icon: "png-512/Compute/EC2.png", category: "Compute" },
        { name: "Amazon RDS", icon: "png-512/Database/RDS.png", category: "Database" },
        { name: "Amazon DynamoDB", icon: "png-512/Database/DynamoDB.png", category: "Database" },
        { name: "AWS Lambda", icon: "png-512/Compute/Lambda.png", category: "Compute" },
        { name: "Amazon CloudFront", icon: "png-512/Networking-Content-Delivery/CloudFront.png", category: "Networking" },
        { name: "Amazon SNS", icon: "png-512/App-Integration/Simple-Notification-Service.png", category: "Integration" },
        { name: "Amazon SQS", icon: "png-512/App-Integration/Simple-Queue-Service.png", category: "Integration" },
        { name: "Amazon VPC", icon: "png-512/Networking-Content-Delivery/Virtual-Private-Cloud.png", category: "Networking" },
        { name: "Amazon Route 53", icon: "png-512/Networking-Content-Delivery/Route-53.png", category: "Networking" },
        { name: "AWS IAM", icon: "png-512/Security-Identity-Compliance/Identity-and-Access-Management.png", category: "Security" },
        { name: "Amazon CloudWatch", icon: "png-512/Management-Governance/CloudWatch.png", category: "Management" },
        { name: "AWS CloudFormation", icon: "png-512/Management-Governance/CloudFormation.png", category: "Management" },
        { name: "Amazon EBS", icon: "png-512/Storage/Elastic-Block-Store.png", category: "Storage" },
        { name: "Amazon API Gateway", icon: "png-512/App-Integration/API-Gateway.png", category: "Integration" }
    ],
    
    // Normal レベル - 同じカテゴリのサービス
    compute: [
        { name: "Amazon EC2", icon: "png-512/Compute/EC2.png", category: "Compute" },
        { name: "AWS Lambda", icon: "png-512/Compute/Lambda.png", category: "Compute" },
        { name: "AWS Elastic Beanstalk", icon: "png-512/Compute/Elastic-Beanstalk.png", category: "Compute" },
        { name: "AWS Fargate", icon: "png-512/Compute/Fargate.png", category: "Compute" },
        { name: "AWS Batch", icon: "png-512/Compute/Batch.png", category: "Compute" },
        { name: "Amazon EC2 Auto Scaling", icon: "png-512/Compute/EC2-Auto-Scaling.png", category: "Compute" },
        { name: "AWS Lightsail", icon: "png-512/Compute/Lightsail.png", category: "Compute" }
    ],
    storage: [
        { name: "Amazon S3", icon: "png-512/Storage/Simple-Storage-Service.png", category: "Storage" },
        { name: "Amazon EBS", icon: "png-512/Storage/Elastic-Block-Store.png", category: "Storage" },
        { name: "Amazon EFS", icon: "png-512/Storage/EFS.png", category: "Storage" },
        { name: "Amazon S3 Glacier", icon: "png-512/Storage/Simple-Storage-Service-Glacier.png", category: "Storage" },
        { name: "AWS Storage Gateway", icon: "png-512/Storage/Storage-Gateway.png", category: "Storage" },
        { name: "AWS Backup", icon: "png-512/Storage/Backup.png", category: "Storage" }
    ],
    database: [
        { name: "Amazon RDS", icon: "png-512/Database/RDS.png", category: "Database" },
        { name: "Amazon DynamoDB", icon: "png-512/Database/DynamoDB.png", category: "Database" },
        { name: "Amazon Aurora", icon: "png-512/Database/Aurora.png", category: "Database" },
        { name: "Amazon ElastiCache", icon: "png-512/Database/ElastiCache.png", category: "Database" },
        { name: "Amazon Neptune", icon: "png-512/Database/Neptune.png", category: "Database" },
        { name: "Amazon DocumentDB", icon: "png-512/Database/DocumentDB.png", category: "Database" }
    ],
    networking: [
        { name: "Amazon VPC", icon: "png-512/Networking-Content-Delivery/Virtual-Private-Cloud.png", category: "Networking" },
        { name: "Amazon CloudFront", icon: "png-512/Networking-Content-Delivery/CloudFront.png", category: "Networking" },
        { name: "Amazon Route 53", icon: "png-512/Networking-Content-Delivery/Route-53.png", category: "Networking" },
        { name: "AWS Direct Connect", icon: "png-512/Networking-Content-Delivery/Direct-Connect.png", category: "Networking" },
        { name: "Elastic Load Balancing", icon: "png-512/Networking-Content-Delivery/Elastic-Load-Balancing.png", category: "Networking" },
        { name: "AWS Global Accelerator", icon: "png-512/Networking-Content-Delivery/Global-Accelerator.png", category: "Networking" }
    ],
    
    // Hard レベル - 珍しいサービスや類似したアイコン
    hard: [
        { name: "AWS Thinkbox Deadline", icon: "png-512/Compute/Thinkbox-Deadline.png", category: "Compute" },
        { name: "AWS Thinkbox Frost", icon: "png-512/Compute/Thinkbox-Frost.png", category: "Compute" },
        { name: "AWS Thinkbox Krakatoa", icon: "png-512/Compute/Thinkbox-Krakatoa.png", category: "Compute" },
        { name: "AWS Thinkbox Sequoia", icon: "png-512/Compute/Thinkbox-Sequoia.png", category: "Compute" },
        { name: "AWS Thinkbox Stoke", icon: "png-512/Compute/Thinkbox-Stoke.png", category: "Compute" },
        { name: "AWS Thinkbox XMesh", icon: "png-512/Compute/Thinkbox-XMesh.png", category: "Compute" },
        { name: "AWS Snowcone", icon: "png-512/Storage/Snowcone.png", category: "Storage" },
        { name: "AWS Snowball", icon: "png-512/Storage/Snowball.png", category: "Storage" },
        { name: "AWS Snowmobile", icon: "png-512/Storage/Snowmobile.png", category: "Storage" },
        { name: "Amazon FSx for Lustre", icon: "png-512/Storage/FSx-for-Lustre.png", category: "Storage" },
        { name: "Amazon FSx for Windows", icon: "png-512/Storage/FSx-for-WFS.png", category: "Storage" },
        { name: "Amazon FSx for OpenZFS", icon: "png-512/Storage/FSx-for-OpenZFS.png", category: "Storage" },
        { name: "Amazon Timestream", icon: "png-512/Database/Timestream.png", category: "Database" },
        { name: "Amazon Keyspaces", icon: "png-512/Database/Keyspaces.png", category: "Database" },
        { name: "Amazon MemoryDB for Redis", icon: "png-512/Database/MemoryDB-for-Redis.png", category: "Database" }
    ]
};

// ハイスコアの保存と取得
class HighScores {
    constructor() {
        this.scores = {
            easy: this.getFromLocalStorage('easy') || [],
            normal: this.getFromLocalStorage('normal') || [],
            hard: this.getFromLocalStorage('hard') || []
        };
    }
    
    // ローカルストレージからスコアを取得
    getFromLocalStorage(difficulty) {
        const scores = localStorage.getItem(`awsQuiz_${difficulty}_scores`);
        return scores ? JSON.parse(scores) : [];
    }
    
    // ローカルストレージにスコアを保存
    saveToLocalStorage(difficulty) {
        localStorage.setItem(`awsQuiz_${difficulty}_scores`, JSON.stringify(this.scores[difficulty]));
    }
    
    // 新しいスコアを追加
    addScore(difficulty, score) {
        this.scores[difficulty].push(score);
        this.scores[difficulty].sort((a, b) => b - a); // 降順にソート
        if (this.scores[difficulty].length > 3) {
            this.scores[difficulty] = this.scores[difficulty].slice(0, 3); // 上位3つだけ保持
        }
        this.saveToLocalStorage(difficulty);
    }
    
    // 特定の難易度のスコアを取得
    getScores(difficulty) {
        return this.scores[difficulty];
    }
}

// ゲームの状態を管理するクラス
class QuizGame {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.usedServices = new Set();
        this.difficulty = 'easy'; // デフォルトの難易度
        this.timer = null;
        this.timeLeft = 10.0;
        this.highScores = new HighScores();
        
        // DOM要素
        this.startScreen = document.getElementById('start-screen');
        this.quizContainer = document.getElementById('quiz-container');
        this.resultScreen = document.getElementById('result-screen');
        this.questionNumber = document.getElementById('question-number');
        this.scoreDisplay = document.getElementById('score');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.questionImage = document.getElementById('question-image');
        this.imageContainer = document.getElementById('image-container');
        this.optionsContainer = document.getElementById('options-container');
        this.optionButtons = document.querySelectorAll('.option');
        this.feedback = document.getElementById('feedback');
        this.feedbackText = document.getElementById('feedback-text');
        this.finalScore = document.getElementById('final-score');
        
        // 難易度選択ボタン
        this.easyButton = document.getElementById('easy-button');
        this.normalButton = document.getElementById('normal-button');
        this.hardButton = document.getElementById('hard-button');
        
        // ハイスコア表示
        this.easyHighScores = document.getElementById('easy-high-scores');
        this.normalHighScores = document.getElementById('normal-high-scores');
        this.hardHighScores = document.getElementById('hard-high-scores');
        
        // タブボタン
        this.tabButtons = document.querySelectorAll('.tab-button');
        
        // ボタン
        this.nextButton = document.getElementById('next-button');
        this.restartButton = document.getElementById('restart-button');
        
        // イベントリスナー
        this.easyButton.addEventListener('click', () => this.startGame('easy'));
        this.normalButton.addEventListener('click', () => this.startGame('normal'));
        this.hardButton.addEventListener('click', () => this.startGame('hard'));
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.restartButton.addEventListener('click', () => {
            this.resultScreen.classList.add('hidden');
            this.startScreen.classList.remove('hidden');
        });
        
        this.optionButtons.forEach(button => {
            button.addEventListener('click', () => this.checkAnswer(button));
        });
        
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => this.switchTab(button));
        });
        
        // ハイスコアを表示
        this.updateHighScoreDisplay();
    }
    
    // タブ切り替え
    switchTab(button) {
        const tab = button.dataset.tab;
        
        // すべてのタブボタンから active クラスを削除
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // クリックされたタブボタンに active クラスを追加
        button.classList.add('active');
        
        // すべてのタブコンテンツを非表示
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // 選択されたタブのコンテンツを表示
        document.getElementById(`${tab}-scores`).classList.add('active');
    }
    
    // ハイスコア表示を更新
    updateHighScoreDisplay() {
        // Easy スコア
        this.easyHighScores.innerHTML = '';
        const easyScores = this.highScores.getScores('easy');
        easyScores.forEach(score => {
            const li = document.createElement('li');
            li.textContent = score + ' 点';
            this.easyHighScores.appendChild(li);
        });
        
        // Normal スコア
        this.normalHighScores.innerHTML = '';
        const normalScores = this.highScores.getScores('normal');
        normalScores.forEach(score => {
            const li = document.createElement('li');
            li.textContent = score + ' 点';
            this.normalHighScores.appendChild(li);
        });
        
        // Hard スコア
        this.hardHighScores.innerHTML = '';
        const hardScores = this.highScores.getScores('hard');
        hardScores.forEach(score => {
            const li = document.createElement('li');
            li.textContent = score + ' 点';
            this.hardHighScores.appendChild(li);
        });
    }
    
    // ゲーム開始
    startGame(difficulty) {
        this.difficulty = difficulty;
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.usedServices = new Set();
        
        // 10問のクイズを生成
        this.generateQuestions(10);
        
        // 画面切り替え
        this.startScreen.classList.add('hidden');
        this.resultScreen.classList.add('hidden');
        this.quizContainer.classList.remove('hidden');
        
        // 最初の問題を表示
        this.displayQuestion();
        
        // スコアをリセット
        this.updateScore();
    }
    
    // クイズ問題を生成
    generateQuestions(count) {
        for (let i = 0; i < count; i++) {
            // ランダムに問題タイプを選択 (0: アイコンから名前を選ぶ, 1: 名前からアイコンを選ぶ)
            const questionType = Math.floor(Math.random() * 2);
            
            let availableServices = [];
            let otherServices = [];
            
            // 難易度に応じてサービスを選択
            if (this.difficulty === 'easy') {
                // Easy モード: Cloud Practitioner や SAA レベルの基本的なサービス
                availableServices = awsServicesByCategory.easy.filter(service => !this.usedServices.has(service.name));
                otherServices = awsServicesByCategory.easy;
            } else if (this.difficulty === 'normal') {
                // Normal モード: 同じカテゴリのサービス
                // ランダムにカテゴリを選択
                const categories = ['compute', 'storage', 'database', 'networking'];
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                availableServices = awsServicesByCategory[randomCategory].filter(service => !this.usedServices.has(service.name));
                otherServices = awsServicesByCategory[randomCategory];
            } else {
                // Hard モード: 珍しいサービスや類似したアイコン
                availableServices = awsServicesByCategory.hard.filter(service => !this.usedServices.has(service.name));
                otherServices = awsServicesByCategory.hard;
            }
            
            // 使用可能なサービスがない場合はリセット
            if (availableServices.length < 1) {
                this.usedServices.clear();
                if (this.difficulty === 'easy') {
                    availableServices = awsServicesByCategory.easy;
                } else if (this.difficulty === 'normal') {
                    const categories = ['compute', 'storage', 'database', 'networking'];
                    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                    availableServices = awsServicesByCategory[randomCategory];
                } else {
                    availableServices = awsServicesByCategory.hard;
                }
            }
            
            // 正解のサービスをランダムに選択
            const correctIndex = Math.floor(Math.random() * availableServices.length);
            const correctService = availableServices[correctIndex];
            
            // 使用済みとしてマーク
            this.usedServices.add(correctService.name);
            
            // 残りの選択肢を取得
            const remainingServices = otherServices.filter(service => service.name !== correctService.name);
            const shuffledOtherServices = this.shuffleArray(remainingServices).slice(0, 3);
            
            // 全ての選択肢を作成
            const options = [correctService, ...shuffledOtherServices];
            
            // 選択肢をシャッフル
            const shuffledOptions = this.shuffleArray(options);
            
            // 問題を作成
            this.questions.push({
                type: questionType,
                correctService: correctService,
                options: shuffledOptions,
                correctIndex: shuffledOptions.indexOf(correctService)
            });
        }
    }
    
    // 配列をシャッフル
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // タイマーを開始
    startTimer() {
        this.timeLeft = 10.0;
        this.updateTimerDisplay();
        
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft -= 0.1;
            this.timeLeft = Math.round(this.timeLeft * 10) / 10; // 小数点第1位まで
            
            if (this.timeLeft <= 0) {
                this.timeLeft = 0;
                clearInterval(this.timer);
                this.timeOut();
            }
            
            this.updateTimerDisplay();
        }, 100);
    }
    
    // タイマー表示を更新
    updateTimerDisplay() {
        this.timerDisplay.textContent = this.timeLeft.toFixed(1);
    }
    
    // タイムアウト処理
    timeOut() {
        // 全てのボタンを無効化
        this.optionButtons.forEach(button => {
            button.disabled = true;
        });
        
        // 正解を表示
        const question = this.questions[this.currentQuestion];
        this.optionButtons[question.correctIndex].classList.add('correct');
        
        // フィードバックを表示
        this.feedback.classList.remove('hidden');
        this.feedback.classList.add('incorrect');
        this.feedback.classList.remove('correct');
        this.feedbackText.textContent = "時間切れ...";
    }
    
    // 問題を表示
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        
        // 問題番号を更新
        this.questionNumber.textContent = this.currentQuestion + 1;
        
        // フィードバックを非表示
        this.feedback.classList.add('hidden');
        
        // タイマーを開始
        this.startTimer();
        
        // 問題タイプに応じて表示を変更
        if (question.type === 0) {
            // アイコンから名前を選ぶ問題
            this.questionText.textContent = "このAWSサービスの名前は？";
            this.imageContainer.classList.remove('hidden');
            this.questionImage.src = question.correctService.icon;
            
            // 選択肢を表示
            this.optionButtons.forEach((button, index) => {
                button.textContent = question.options[index].name;
                button.innerHTML = '';
                button.textContent = question.options[index].name;
                button.dataset.index = index;
                button.className = 'option';
                button.disabled = false;
            });
        } else {
            // 名前からアイコンを選ぶ問題
            this.questionText.textContent = `「${question.correctService.name}」のアイコンはどれ？`;
            this.imageContainer.classList.add('hidden');
            
            // 選択肢を表示
            this.optionButtons.forEach((button, index) => {
                button.textContent = '';
                const img = document.createElement('img');
                img.src = question.options[index].icon;
                img.alt = question.options[index].name;
                button.innerHTML = '';
                button.appendChild(img);
                button.dataset.index = index;
                button.className = 'option';
                button.disabled = false;
            });
        }
    }
    
    // 回答をチェック
    checkAnswer(selectedButton) {
        // タイマーを停止
        clearInterval(this.timer);
        
        const selectedIndex = parseInt(selectedButton.dataset.index);
        const question = this.questions[this.currentQuestion];
        
        // 全てのボタンを無効化
        this.optionButtons.forEach(button => {
            button.disabled = true;
        });
        
        // 正解かどうかをチェック
        if (selectedIndex === question.correctIndex) {
            // 正解の場合
            selectedButton.classList.add('correct');
            this.feedback.classList.remove('hidden');
            this.feedback.classList.add('correct');
            this.feedback.classList.remove('incorrect');
            this.feedbackText.textContent = "正解！";
            
            // 残り時間をスコアに加算（小数点以下切り捨て）
            const pointsEarned = Math.floor(this.timeLeft);
            this.score += pointsEarned;
            this.updateScore();
        } else {
            // 不正解の場合
            selectedButton.classList.add('incorrect');
            this.optionButtons[question.correctIndex].classList.add('correct');
            this.feedback.classList.remove('hidden');
            this.feedback.classList.add('incorrect');
            this.feedback.classList.remove('correct');
            this.feedbackText.textContent = "不正解...";
        }
    }
    
    // 次の問題へ
    nextQuestion() {
        // ボタンを有効化
        this.optionButtons.forEach(button => {
            button.disabled = false;
            button.className = 'option';
        });
        
        this.currentQuestion++;
        
        // まだ問題が残っている場合
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            // クイズ終了
            this.endGame();
        }
    }
    
    // ゲーム終了
    endGame() {
        // タイマーを停止
        clearInterval(this.timer);
        
        // ハイスコアを更新
        this.highScores.addScore(this.difficulty, this.score);
        this.updateHighScoreDisplay();
        
        // 結果画面を表示
        this.quizContainer.classList.add('hidden');
        this.resultScreen.classList.remove('hidden');
        this.finalScore.textContent = this.score + ' 点';
        
        // 対応するタブを表示
        this.tabButtons.forEach(button => {
            if (button.dataset.tab === this.difficulty) {
                this.switchTab(button);
            }
        });
    }
    
    // スコア更新
    updateScore() {
        this.scoreDisplay.textContent = this.score;
    }
}

// ページ読み込み時にゲームを初期化
document.addEventListener('DOMContentLoaded', () => {
    const game = new QuizGame();
});
