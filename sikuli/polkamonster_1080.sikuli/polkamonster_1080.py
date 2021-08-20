import os  #导入os包  
print "測試" 

nextCount = 0
noFightCount = 0
setThrowException(False)

def reloadPage():
    type(Key.F5)
    reloadArea = Region(1,104,1073,256)
    isReloadArea = reloadArea.exists(Pattern("1629421744929.png").similar(0.9), 30)
    if isReloadArea is None:
        print('沒有載入出網頁, 稍等重整')
        reloadPage()
    else:
        print('載入網頁成功!')
        isReloadArea.highlight(2)
        wait(5)
    

while True:
    timeArea = Region(1,384,524,662)
    isTimeArea = timeArea.exists(Pattern("1629084760954.png").similar(0.9), 5)
    if isTimeArea is None:
        print('沒 Next Time! 開始打架!')
        wait(10)
    
        sixtyMonsterArea = Region(480,606,385,544)
        isSixtyMonsterArea = sixtyMonsterArea.exists(Pattern("1629013141015.png").similar(0.9), 5)
        if isSixtyMonsterArea is None:
            print('沒找到 Fight 按鈕')

            noFightCount += 1
            print(noFightCount)
            if(noFightCount % 2) == 0:
                reloadPage()
            
        else:
            print('找到 Fight 開始打架!')
            isSixtyMonsterArea.highlight(2)
            sixtyMonsterArea.click(Pattern("1629013141015.png").similar(0.9))
            
            metaArea = Region(731,516,348,85)
            isMetaArea = metaArea.exists(Pattern("1629013168898.png").similar(0.98), 5)
            if isMetaArea is None:
                print('沒找到 meta按鈕!')

                noFightCount += 1
                print(noFightCount)
                if(noFightCount % 2) == 0:
                    reloadPage()

            else:
                print('找到meta, 點擊!')
                isMetaArea.highlight(2)
                metaArea.click(Pattern("1629013168898.png").similar(0.98))
                wait(30)
                reloadPage()
    
    else:
        print('找到 Next Time!')
        isTimeArea.highlight(2)

        nextArea = Region(3,230,560,971)
        isNextArea = nextArea.exists(Pattern("1629013326373.png").similar(0.92), 5)
        if isNextArea is None:
            print('沒找到下一個按鈕')

            noFightCount += 1
            print(noFightCount)
            if(noFightCount % 3) == 0:
                reloadPage()
        else:
            print('切換到下一個!')
            nextArea.click(Pattern("1629013326373.png").similar(0.92))
            isNextArea.highlight(2)
            nextCount += 1
            print(nextCount)
            if(nextCount % 10) == 0:
                reloadPage()
            mouseMove(-100,0)
    