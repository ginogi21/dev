temp = int(input("오늘 온도가 어때요?"))
if temp >= 30:
    print("너무 더워요 외출을 삼가하세요")
elif 10 < temp <= 30 :
    print("외출하기 좋은 온도입니다.")
elif 0<= temp <= 10 :
    print ("외투를 챙기세요")
else:
    print("너무 추워요 외출을 삼가하세요")