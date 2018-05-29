import React, { Component } from 'react'
import $ from 'jquery'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            arr: []
        };
        this.inputOnFocus = this.inputOnFocus.bind(this);
        this.enter = this.enter.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    enter(e) {
        if(e.which === 13){
            var str = ""
            var namex = $("#searchInput").val();
            namex = namex.replace(/[ ]/g, "");
            $.ajax({
                url: "http://cuixue94.cn/yinyue/p.php?key=0&name=" + namex + '&p=0',
                type: "GET",
                datatype: "jsonp",
                success: function (res) {
                    var x = JSON.parse(res);
                    var src = x.data.zhida.zhida_singer;
                    var songs = x.data.song.list;
                    console.log(x.data)
                    if (src) {
                        str +=
                            `
                                 <li>
                                    <img src="${src.singerPic }" />
                                    <div>
                                        <p class="song">${src.singerName}</p>
                                        <p class="singer">单曲：${x.data.song.totalnum}  专辑：${x.data.song.curnum}</p>
                                    </div>
                                </li>
					        `
                    }

                    for (var i = 0; i < songs.length; i++) {
                        
                        str += 
                            `
                                 <li>
                                    <audio src="http://ws.stream.qqmusic.qq.com/C100${x.data.song.list[i].mid}.m4a?fromtag=36"></audio>
                                    <img src="./imgs/music.jpg"}/>
                                    <div>
                                        <p class="song">${songs[i].name}</p>
                                        <p class="singer">${songs[i].singer[0].name}</p>
                                    </div>
                                </li>
					        `
                    }
                    $("#result").html(str);
                },
                complete: function() {
                    $("#result li").click(function(){
                        var audio = $(this).find('audio')[0];
                        if(!audio){
                            return;
                        }
                        if (audio.paused) { /*如果已经暂停*/
                            audio.play(); /*播放*/
                        } else {
                            audio.pause();/*暂停*/
                        }
                    })
                }
            })
        }
    }
    cancel() {
        this.refs.result.style.display = 'none';
        this.refs.search.style.display = 'block';
    }
    inputOnFocus() {
        this.refs.search.style.display = 'none';
        this.refs.result.style.display = 'block';
    }
    componentDidMount() {
        this.refs.result.style.display = 'none';
    }
    
    render() {
        return (
            <div className="search">
                <div className="weui-search-bar search_input" id="searchBar">
                    <div className="weui-search-bar__form">
                        <div className="weui-search-bar__box">
                            <i className="weui-icon-search"></i>
                            <input type="search" onBlur={this.inputOnBlur} onFocus={this.inputOnFocus} onKeyPress={this.enter} className="weui-search-bar__input" id="searchInput" placeholder="搜索歌曲、歌单、专辑" required="" />
                            <a href="javascript:;" className="weui-icon-clear" id="searchClear"></a>
                        </div>
                        <label className="weui-search-bar__label" id="searchText">
                            <i className="weui-icon-search"></i>
                            <span>搜索歌曲、歌单、专辑</span>
                        </label>
                    </div>
                    <a href="javascript:;" className="weui-search-bar__cancel-btn" id="searchCancel" ref="cancel" onClick={this.cancel}>取消</a>
                </div>
                <div className="search_hot" ref="search">
                    <h4>热门搜索</h4>
                    <div className="result clearfix">
                        <a className="active">梦想的声音第二季</a>
                        <a>JUST LIKE THIS</a>
                        <a>像我这样的人</a>
                        <a>普通DISCO</a>
                        <a>我们不一样</a>
                        <a>PSYCHO</a>
                        <a>等你下课</a>
                        <a>专属情歌</a>
                        <a>文爱</a>
                    </div>
                </div>
                <ul className="search_result" ref="result" id="result">
                    
                </ul>
            </div> 
        )
    }
}
export default Search;