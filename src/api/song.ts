import request from "@/util/request";
/**
 * 搜索歌曲
 * @param musicName 歌曲名
 * @returns 搜索结果
 */
export function searchSongs(musicName: string) {
  return request({
    url: `/search?keywords=${musicName}`,
    method: "GET",
  });
}
